import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <h1>Contact Us</h1>
        <input type='text' placeholder='Enter Your Name'/>
        <input type='email' placeholder='email'/>
        <textarea type='textarea' placeholder='Enter Massage' rows={4}/>
        <button type='submit'>Send Massage</button>
    </div>
  )
}

export default Contact