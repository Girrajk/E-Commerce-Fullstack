import React, { useState } from 'react'
import "../App.css"

const Signup = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSignUp = () => {
    localStorage.setItem('user', JSON.stringify({ fName, lName, email, password, phone, address }));
    alert('User signed up successfully!');
  };
  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <input
        placeholder='Enter First Name'
        type='text'
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        placeholder='Enter Last Name'
        type='text'
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <input
        placeholder='Emter Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Select Immage :</label>
      <input
        type='file'
        placeholder='Uplode Immge'

      />
      <input
        type='number'
        placeholder='Enter Phone Number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='text'
        placeholder='Enter Your Address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default Signup