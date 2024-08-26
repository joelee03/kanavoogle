import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ title, description, icon, name, caption, route, duration}) => {
  return (
    <div className="flex w-full py-[5rem] px-4 bg-white gap-20 justify-center">
      {/* Left Column */}
      <div className="flex flex-col items-start w-[30%] text-start text-black">
        <h2 className="text-[3rem] font-bold mb-10">{title}</h2>
        <p className="text-[1.5rem]">{description}</p>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-6 gap-5">
        <Link to={route}>
            <div className="w-[23rem] h-[23rem] bg-gray-200 rounded-lg flex flex-col">
                <img src={icon} alt={`${title} icon`} className="h-[50%] w-full object-cover rounded-t-lg" />
                <div className="text-center text-black h-[50%] flex flex-col justify-between">
                    <div>
                        <h2 className="mx-10 text-[1.5rem] font-bold mb-2">{name}</h2>
                        <p className="text-[1rem]">{caption}</p>
                    </div>
                    <div className="inline-block w-[5rem] bg-blue-500 text-white px-2 py-1 rounded text-sm mb-2 self-center">
                        {duration} hours
                    </div>
                </div>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Course;