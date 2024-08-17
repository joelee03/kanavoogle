import React from 'react'
import Sidebar from '../components/sidebar'
import InquiryForm from '../components/InquiryForm'

function Skills() {
  return (
    <div className="relative font-custom flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center w-full h-screen overflow-hidden p-8 ml-64"> 
        <h1 className="text-3xl font-bold mb-8">Gain 21st Century Skills</h1>

        <InquiryForm />
      </div>
    </div>
  )
}

export default Skills