import React from 'react'

import Course from '../components/Course'
import c1 from '../assets/webp/b-course.webp'

function Courses() {
  return (
    <div>
      <div className='mt-20 mx-auto text-center flex flex-col items-center justify-center'>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-custom md:py-6" >Courses</h1>
        <div className='flex flex-col items-center w-full'>
          <Course 
            title="Novel Blockchain Projects"
            description="For evaluating and experimenting with blockchain technology."
            icon={c1}
          />
        </div>
      </div>
    </div>
  )
}

export default Courses