import React, { useState } from 'react';
import "../App.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState("")

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password && user.fName === fName) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <input
        type='text'
        value={fName}
        onChange={(e) => setFName(e.target.value)}
        placeholder='Enter Name'

      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
