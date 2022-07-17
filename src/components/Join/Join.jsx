import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './join.css'


const Join = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i3jm54b', 'template_e8swnbf', form.current, 'Vo8yY31ZN1pRInTNd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <div className="join" id="join">
    <div className="left-join">
      <hr />
      <div>
        <span className='stroke-text'>READY TO</span>
        <span> LEVEL UP</span>
      </div>

      <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'>  WITH US</span>
      </div>
    </div>
    <div className="right-join">
      <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input type="email" name="user_email" placeholder='Enter your email address' />
        <button type="submit" className='btn btn-j'>Join Now</button>
      </form>
    </div>
   </div>
  )
}

export default Join