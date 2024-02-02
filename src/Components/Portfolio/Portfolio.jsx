import React from 'react';
import './Portfolio.css';
export default function Portfolio() {
  return (
    <>
    <div className='container m-auto text-center p-5 port'>
    <div className='row m-auto text-center'>
      <div className='header col-md-12 m-auto'>
      <h2 className=' fs-1 p-3 text-center'>PORTFOLIO COMPONENT</h2>
      <p className='text-center'><i className="fa-sharp fa-solid fa-star  fs-3 "></i></p>
      </div>
      <div className='col-md-4 rounded g-5'>
        <img className='rounded' src="./poert1.png" alt="poert1" />
      </div>
      <div className='col-md-4 rounded g-5'>
        <img className='rounded' src="./port2.png" alt="port2" />
      </div>
      <div className='col-md-4 rounded g-5'>
        <img className='rounded' src="./port3.png" alt="port3" />
      </div>
      <div className='col-md-4 rounded g-5'>
        <img className='rounded' src="./poert1.png" alt="poert1" />
      </div>
      <div className='col-md-4 rounded g-5'>
        <img className='rounded' src="./port2.png" alt="port2" />
      </div>
      <div className='col-md-4 rounded g-5'>
        <img className='rounded' src="./port3.png" alt="port3" />
      </div>
    </div>
    </div>
    </>
  )
}
