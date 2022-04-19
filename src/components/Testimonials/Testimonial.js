import React from 'react'
import './testimonial.css'

function Testimonial({user, testimony}) {
  return (
    <div class='testimonial'>
        <h2>{user}</h2>
        <p>{testimony}</p>
    </div>
  )
}

export default Testimonial