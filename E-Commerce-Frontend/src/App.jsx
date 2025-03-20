import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar';
import "./App.css"
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Logout from './Components/Logout';
import Category from './Components/Category';

const App = () => {
  return (

    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App