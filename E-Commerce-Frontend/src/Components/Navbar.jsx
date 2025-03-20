import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <div className='d1'>

          <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/Product_sample_icon_picture.png' alt='icon not fount' />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>

        <div className='d2 '>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>

        </div>
      </ul>
    </nav>
  )
}

export default Navbar