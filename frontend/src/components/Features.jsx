import React from 'react'
import { FaChalkboardTeacher, FaUserFriends, FaHeadset } from 'react-icons/fa'

function Features() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg text-white py-12 m-3 max-w-5xl w-full p-6">
        <div className="grid grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            {/* Courses */}
            <div className="bg-webcolor p-6 rounded-lg flex flex-col items-center hover:scale-105">
                <FaChalkboardTeacher size={48} className="mb-4" />
                <span className='font-bold'>Courses</span>
            </div>
            {/* Mentoring */}
            <div className="bg-webcolor p-6 rounded-lg flex flex-col items-center hover:scale-105">
                <FaUserFriends size={48} className="mb-4" />
                <span className='font-bold'>1on1 Mentoring</span>
            </div>
            {/* Priority Support */}
            <div className="bg-webcolor p-6 rounded-lg flex flex-col items-center hover:scale-105">
                <FaHeadset size={48} className="mb-4" />
                <span className='font-bold'>Priority Support</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
