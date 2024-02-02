import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <>
    <div className='container m-auto text-center p-5 contact'>
    <div className='header col-md-12 m-auto'>
      <h2 className=' fs-1 p-3 text-center'>CONTACT SECTION</h2>
      <p className='text-center'><i className="fa-sharp fa-solid fa-star  fs-3 "></i></p>
    </div>
    <form className='m-auto text-center'>
      <input className='w-75 form-control m-auto my-5' type="text" placeholder='UserName' />
      <input className='w-75 form-control m-auto my-5' type="number" placeholder='UserAge' />
      <input className='w-75 form-control m-auto my-5' type="email" placeholder='UserMail' />
      <input className='w-75 form-control m-auto my-5' type="password" placeholder='UserPassword' />
      <button type="submit" class="btn btn-success">SendMessege</button>
    </form>
    </div>
    </>
  )
}
