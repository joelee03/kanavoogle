import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../assets/webp/icon.webp'

function Preview() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="absolute top-0 left-0 p-4">
        <Link to="/"><img className="h-[5rem] object-cover" src={Icon} alt="kanavoogle Icon"/></Link>
      </div>
      <div className='top'>
        <h1>What we Offer</h1>
        <p>Kanavoogle Pty Ltd is a start-up company established in 2018, dedicated to providing education 
          and project management consulting services to tech startups and early childhood education institutions. 
          Our project aims to develop a digital platform that allows users to inquire about our services. 
          The platform should be simple, user-friendly, and accessible on both mobile devices and desktops.</p>
      </div>
      <div className='top'>
        <h1>Novel Blockchain Projects</h1>
      </div>
      <div className='top'>
        <h1>21st Century Skills Development</h1>
      </div>
      <div className='top'>
        <h1>Montessori Education Implementation</h1>
      </div>
      <div className='top'>
        <h1>What we Offer</h1>
      </div>
    </div>
  )
}

export default Preview