import React from 'react'
import Sidebar from '../ui/sidebar';
import InquiryForm from '../components/InquiryForm'

function montessori() {
  return (
    <div className="relative font-custom flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center w-full h-screen overflow-hidden p-8 ml-64"> 
        <h1 className="text-3xl font-bold mb-8">Implement Montessori Education</h1>

        <InquiryForm />
      </div>
    </div>
  )
}

export default montessori;