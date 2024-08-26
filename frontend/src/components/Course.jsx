import React from 'react';

const Course = ({ title, description, icon }) => {
  return (
    <div className="flex w-full py-[10rem] px-4 bg-[#7AA647]">
      {/* Left Column */}
      <div className="flex flex-col gap-5 items-start">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center">
        <div className="cursor-pointer">
          <img src={icon} alt={`${title} icon`} className="w-32 h-32 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Course;