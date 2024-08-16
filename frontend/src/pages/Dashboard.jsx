import React from 'react'
import InquiryForm from '../components/InquiryForm'

function Dashboard() {
  return (
    <div className="relative font-custom flex flex-col justify-center items-center w-full h-screen overflow-hidden"> 
      <h1>Homepage</h1>
      <InquiryForm />
    </div>
  )
}

export default Dashboard