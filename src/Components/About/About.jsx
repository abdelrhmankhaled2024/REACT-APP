import React from 'react';
import './About.css';
export default function About() {
  return (
    <>
    <div className='about bg-success text-center d-flex text-center justify-content-center align-items-center flex-column'>
    <h2 className='text-light fs-1 p-3'>ABOUT COMPONENT</h2>
    <p><i className="fa-sharp fa-solid fa-star text-light fs-3"></i></p>
    <div className='row container'>
      <div className='col-md-6'>
      <p className='text-light text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className='col-md-6'>
      <p className='text-light text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    </div>
    </>
  )
}
