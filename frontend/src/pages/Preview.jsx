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
        <h1>We Offer</h1>
      </div>
    </div>
  )
}

export default Preview