import React, { useState } from 'react';
import InquiryForm from '../components/InquiryForm';
import Topbar from '../ui/topbar'
import Sidebar from '../ui/sidebar';

import s1 from '../assets/webp/skills-1.webp';
import s2 from '../assets/webp/skills-2.webp';
import m3 from '../assets/webp/montessori-3.webp';

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [s1, s2, m3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto p-4 ml-64">
      <Topbar />
      <Sidebar />

      {/* Heading */}
      <h1 className="mt-20 text-center text-3xl font-bold my-8 text-webcolor">21st Century Skills</h1>

      {/* Image Carousel Section */}
      <div className="relative w-full h-72 overflow-hidden rounded-lg my-8">
        <div
          className="absolute inset-0 flex transition-transform transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          &#9664;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          &#9654;
        </button>
      </div>

      {/* Three Sections Below the Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4">
        {/* Section 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-4 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Learning Skills</h2>
          <p>
          Dive into strategies that foster effective learning skills in children, focusing on critical thinking, problem-solving, and the ability to learn independently in a supportive environment.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-4 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Literacy Skills</h2>
          <p>
          Discover methods to enhance literacy skills in young learners, including reading, writing, and comprehension, through interactive and engaging educational practices.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-4 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Life Skills</h2>
          <p>
          Explore how to teach essential life skills such as communication, self-management, and collaboration, helping children to become confident and capable individuals.
          </p>
        </div>
      </div>

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}

export default Skills;