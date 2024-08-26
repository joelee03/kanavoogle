import React from 'react'

import Course from '../components/Course'
import c1 from '../assets/webp/b-course.webp'
import c2 from '../assets/webp/s-course.webp'
import c3 from '../assets/webp/m-course.webp'

function Courses() {
  return (
    <div>
      <div className='my-20 mx-auto text-center flex flex-col items-center justify-center'>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-custom md:py-6" >Courses</h1>
        <div className='flex flex-col items-center w-full'>
          <Course 
            title="Novel Blockchain Projects"
            description="For evaluating and experimenting with blockchain technology."
            icon={c1}
            name="Blockchain Fundamentals"
            caption="Learn the foundations of blockchain"
          />
          <Course 
            title="Gain 21st Century Skills"
            description="Customized projects for learning top 21st-century skills using Blockchain and AI."
            icon={c2}
            name="21st Century Foundations"
            caption="Learn the fundamental skills needed in the 21st Century"
          />
          <Course 
            title="Implement Montessori Education"
            description="Expansion of day care services with Montessori education model."
            icon={c3}
            name="Montessori Education Basics"
            caption="Learn the fundamentals of montessori education"
          />
        </div>
      </div>
    </div>
  )
}

export default Courses