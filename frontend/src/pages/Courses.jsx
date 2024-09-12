import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Course from '../components/Course';
import { db } from '../firebase/firebase'; // Import Firestore

function Courses() {
  const [courses, setCourses] = useState([]);

  // Fetch courses from Firestore
  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      const coursesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  return (
    <div className='h-[100vh]'>
      <div className='my-20 mx-auto text-center flex flex-col items-center justify-center'>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-custom md:py-6">Courses</h1>
        <div className='flex flex-col items-center w-full'>
          {courses.map((course) => (
            <Course
              key={course.id}
              title={course.title}
              description={course.description}
              icon={course.icon} 
              name={course.name}
              caption={course.caption}
              route={course.route}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;