import React, { useState } from 'react';
import InquiryForm from '../components/InquiryForm';
import Topbar from '../ui/topbar'
import Sidebar from '../ui/sidebar';

import b1 from '../assets/webp/blockchain-1.webp';
import b2 from '../assets/webp/blockchain-2.webp';
import b3 from '../assets/webp/blockchain-3.webp';

function Blockchain() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [b1, b2, b3];

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
      <h1 className="mt-20 text-center text-3xl font-bold my-8 text-webcolor">Novel Blockchain Projects</h1>

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
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Decentralized Finance (DeFi) Innovations</h2>
          <p>
          Discover groundbreaking DeFi projects that are reshaping the financial landscape, offering decentralized alternatives to traditional banking, lending, and trading systems.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-4 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">Blockchain for Social Impact</h2>
          <p>
          Explore innovative blockchain projects that aim to solve global challenges, from transparent charitable donations to improving supply chain traceability in humanitarian efforts.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-4 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">NFTs and Digital Collectibles</h2>
          <p>
          Understand the emerging trends in NFTs and digital collectibles, and how these blockchain-based assets are transforming art, gaming, and ownership in the digital world.
          </p>
        </div>
      </div>

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}

export default Blockchain;