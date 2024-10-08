import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Button from '../ui/button';

const CoursePreview = () => {

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    console.log('Navigating to:', route);
      navigate(route); 
  };

  const { courseId } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch course details from Firestore
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, 'courses', courseId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          setError("Course not found");
        }
      } catch (err) {
        setError("Failed to fetch course data");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Safeguard against missing or undefined learningOutcomes
  const learningOutcomes = course?.learningOutcomes || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <p className="text-xl mb-6">{course.caption}</p>
      <div className='w-200 h-200 mb-10'>
        <img src={course.icon} alt={course.title}/>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Learning Outcomes:</h2>
      <ul className="list-disc pl-6 mb-6">
        {learningOutcomes.length > 0 ? (
          learningOutcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))
        ) : (
          <li>No learning outcomes available.</li>
        )}
      </ul>

      <h3 className="text-xl font-semibold mb-4">Price: ${course.price}</h3>
      <p className="text-lg font-semibold mb-4">Duration: {course.duration} hours</p>

      <Button
            variant="primary"
            size="lg"
            onClick={() => handleNavigation('/courses//html')}
            className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
          >
            Enroll
      </Button>
    </div>
  );
};

export default CoursePreview;

