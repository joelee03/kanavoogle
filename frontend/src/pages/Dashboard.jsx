import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import InquiryDetails from '../components/InquiryDetails';

function Dashboard() {
  // Sample data for inquiries
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      projectName: "Project Alpha",
      name: "John Doe",
      email: "john@example.com",
      service: "Web Development",
      details: "Need a responsive website built for my startup."
    },
    {
      id: 2,
      projectName: "Project Beta",
      name: "Jane Smith",
      email: "jane@example.com",
      service: "SEO Optimization",
      details: "Looking to improve the SEO of our e-commerce site."
    }
  ]);

  return (
    <div className="relative font-custom flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center w-full h-screen overflow-hidden p-8">
        <h1 className="text-3xl font-bold mb-8">Your Inquiries</h1>

        {/* Your Inquiries Section */}
        {inquiries.length > 0 ? (
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4">Active Inquiries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inquiries.map((inquiry) => (
                <InquiryDetails key={inquiry.id} inquiry={inquiry} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src="path/to/empty-state-image.png" alt="No Inquiries" className="mb-4" />
            <p className="text-gray-600 mb-4">You don't have any inquiries yet.</p>
            <button
              onClick={() => window.location.href = '/start-inquiry'} // Replace with the correct route
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-150"
            >
              Start Inquiry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
