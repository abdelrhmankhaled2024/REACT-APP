import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <>
    <div className='bg-success d-flex home text-center justify-content-center align-items-center flex-column'>
        <div>
            <img src='./avataaars.svg' alt="route" />
        </div>
      <h2 className='text-light fs-1 p-3'>START FRAMEWORK</h2>
      <p><i className="fa-sharp fa-solid fa-star text-light fs-3 p-2"></i></p>
      <p className='text-light '>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
