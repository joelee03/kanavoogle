import React, { useState } from 'react';
import InquiryForm from '../components/InquiryForm';

import m1 from '../assets/webp/montessori-1.webp';
import m2 from '../assets/webp/montessori-2.webp';
import m3 from '../assets/webp/montessori-3.webp';

function Montessori() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [m3, m2, m1];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Heading */}
      <h1 className="mt-20 text-center text-3xl font-bold my-8 text-webcolor">Montessori Education</h1>

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
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Montessori Philosophy</h2>
          <p>
            Explore the fundamental principles of Montessori education, focusing on child-centered learning, independence, and respect for a child’s natural psychological development.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-4 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Classroom Environment</h2>
          <p>
            Learn how to create a prepared environment that encourages exploration, creativity, and hands-on learning, tailored to the needs of each child.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-4 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Montessori Materials</h2>
          <p>
            Understand the unique materials used in Montessori education and how they help children develop practical life skills, sensory awareness, and a deep understanding of various subjects.
          </p>
        </div>
      </div>

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}

export default Montessori;