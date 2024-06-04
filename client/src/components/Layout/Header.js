import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand"><FaBasketShopping /> E-Commerce App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category" className="nav-link">Category</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" >Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">Cart (0)</NavLink>
            </li>
            
          </ul>
        </div>
      </nav>


    </>
  )
}

export default Header