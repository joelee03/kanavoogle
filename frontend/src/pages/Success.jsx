import React from 'react'
import { useNavigate } from 'react-router-dom';

function Success() {
    const navigate = useNavigate();

    const handleViewCourses = () => {
      navigate('/courses//html');
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-[90vh] bg-green-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
          <p className="text-gray-700 mb-6">Thank you for your purchase. You can now access your courses.</p>
          <button
            onClick={handleViewCourses}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            View Courses
          </button>
        </div>
      </div>
    );
}

export default Success