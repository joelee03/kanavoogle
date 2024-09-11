import React, { useState } from 'react';
import InquiryForm from '../components/SkillsForm';

import s1 from '../assets/webp/skills-1.webp';
import s2 from '../assets/webp/skills-2.webp';
import m3 from '../assets/webp/montessori-3.webp';
import SampleSkills from '../components/SampleSkills';

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
    <div className="container mx-auto p-4">
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

      {/* sample projects */}
      <SampleSkills />

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}

export default Skills;