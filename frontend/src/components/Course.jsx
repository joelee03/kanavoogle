import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ title, description, icon, name, caption, route}) => {
  return (
    <div className="flex w-full py-[5rem] px-4 bg-white gap-20 justify-center">
      {/* Left Column */}
      <div className="flex flex-col items-start w-[30%] text-start">
        <h2 className="text-[3rem] font-bold text-black mb-2">{title}</h2>
        <p className="text-[1.5rem] text-gray-400">{description}</p>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-6 gap-5">
        <Link to={route}>
            <div className="cursor-pointer w-[20rem] h-[20rem] bg-black/50 rounded-lg">
            <img src={icon} alt={`${title} icon`} className="h-[50%] w-full object-cover rounded-t-lg" />
            <div className='flex fel-col h-[50%]'>
                <h2 className="text-[1.5rem] font-bold text-black mb-2">{name}</h2>
                <p className="text-[1rem] text-gray-400">{caption}</p>
            </div>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Course;