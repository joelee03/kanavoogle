import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase'; 
import { useAuth } from '../authentication/AuthContext'; 
import Button from '../ui/button';

const stripePromise = loadStripe('pk_test_51PrZbhRqe8PxoiRo43fHJ5qr43hE1S6QP2LQuBzfLOKc0lkZS1tNSlyEpqirLSO1lbDrVYDSs3G5WZEMBVIqB3NE00IpwOvTZq');

const CoursePreview = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { courseId } = useParams(); // Get the course ID from the URL

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasAccess, setHasAccess] = useState(false); // Track user access status

  // Fetch course details from Firestore
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, 'courses', courseId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          setError('Course not found');
        }
      } catch (err) {
        setError('Failed to fetch course data');
      } finally {
        setLoading(false);
      }
    };

    const fetchUserAccess = async () => {
      if (currentUser) {
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists() && userSnap.data().hasAccess) {
            setHasAccess(true); // Set access status based on Firestore data
          }
        } catch (err) {
          console.error('Failed to fetch user access:', err);
        }
      }
    };

    fetchCourse();
    fetchUserAccess();
  }, [courseId, currentUser]);

  const handleCheckout = async () => {
    if (!currentUser) {
      alert('Please log in to enroll.');
      navigate('/login'); // Redirect to login if user is not authenticated
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5050/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mode: 'payment',
        client_reference_id: currentUser.uid, // Firebase UID passed here
      }),
    });

    const { sessionId } = await response.json();
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Stripe checkout error:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const learningOutcomes = course?.learningOutcomes || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <p className="text-xl mb-6">{course.caption}</p>
      <div className="w-200 h-200 mb-10">
        <img src={course.icon} alt={course.title} />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Learning Outcomes:</h2>
      <ul className="list-disc pl-6 mb-6">
        {learningOutcomes.length > 0 ? (
          learningOutcomes.map((outcome, index) => <li key={index}>{outcome}</li>)
        ) : (
          <li>No learning outcomes available.</li>
        )}
      </ul>

      <h3 className="text-xl font-semibold mb-4">Price: ${course.price}</h3>
      <p className="text-lg font-semibold mb-4">Duration: {course.duration} hours</p>

      {hasAccess ? (
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate('/courses//html')}
          className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
        >
          Continue
        </Button>
      ) : (
        <Button
          variant="primary"
          size="lg"
          onClick={handleCheckout}
          className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
        >
          Enroll
        </Button>
      )}
    </div>
  );
};

export default CoursePreview;
