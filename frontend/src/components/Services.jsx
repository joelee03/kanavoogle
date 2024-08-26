import React from 'react';
import { FaProjectDiagram, FaGraduationCap, FaChild } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <FaProjectDiagram className='w-20 h-20 mx-auto mt-[-3rem] text-blue-500' />
                  <h2 className='text-2xl font-bold text-center py-8 border-b'>Novel Blockchain Projects</h2>
                  <p className='text-center text-xl font-medium mx-8 mt-8 pb-8 border-b'>
                      For evaluating and experimenting with blockchain technology.
                  </p>
                  <Link to='/blockchain'>
                  <button className='bg-[#8ABE53] text-white w-[200px] rounded-md font-medium my-9 mx-auto px-6 py-3'>
                    Learn More
                    </button>
                </Link>
              </div>

              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <FaGraduationCap className='w-20 h-20 mx-auto mt-[-3rem] text-green-500' />
                  <h2 className='text-2xl font-bold text-center py-8 border-b'>Gain 21st Century Skills</h2>
                  <p className='text-center text-xl font-medium mx-8 mt-8 pb-8 border-b'>
                      Customized projects for learning top 21st-century skills using Blockchain and AI.
                  </p>
                  <Link to='/skills'>
                  <button className='bg-[#8ABE53] text-white w-[200px] rounded-md font-medium my-9 mx-auto px-6 py-3'>
                    Learn More
                    </button>
                </Link>
              </div>

              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <FaChild className='w-20 h-20 mx-auto mt-[-3rem] text-purple-500' />
                  <h2 className='text-2xl font-bold text-center py-8 border-b'>Montessori Education</h2>
                  <p className='text-center text-xl font-medium mx-8 mt-8 pb-8 border-b'>
                      Expansion of day care services with Montessori education model.
                  </p>
                  <Link to='/montessori'>
                  <button className='bg-[#8ABE53] text-white w-[200px] rounded-md font-medium my-9 mx-auto px-6 py-3'>
                    Learn More
                    </button>
                </Link>
              </div>
          </div>
        </div>
    );
}

export default Services;

