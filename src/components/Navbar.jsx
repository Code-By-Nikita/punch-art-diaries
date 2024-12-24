import React from 'react';
import Button1 from "./Button1.jsx";
import "../style/navbarStyle.css";
import { CiLock } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className="logo-container">
          <img src="../assets/Logo.png" alt="Logo" className="navbar-logo" />
        </div>
        <ul className="nav-ul">
          <li><input type="search" className="search" placeholder="Search..." /></li>
          <li><NavLink to="../pages/Products.jsx">Products</NavLink></li>
          <li><NavLink to="../pages/Reviews.jsx">Reviews</NavLink></li>
          <li><NavLink to="../pages/Services.jsx">Services</NavLink></li>
          <li><NavLink to="../pages/FAQ.jsx">FAQ</NavLink></li>
          <li><NavLink to="../pages/Contact.jsx">Contact</NavLink></li>

          <li>
            <NavLink to="../pages/Cart.jsx"><Button1 label="Cart" icon={CiShoppingCart} iconProps={{ size: 25, style: { color: '#384047' } }}></Button1></NavLink>
          </li>

          <li>
            <NavLink to="../pages/Login.jsx"><Button1 label="Login" icon={CiLock} iconProps={{ size: 25, style: { color: '#384047' } }}></Button1></NavLink>
          </li>

          <li>
            <NavLink to="../pages/SignUp.jsx"><Button1 label="Sign Up" icon={CiCircleChevRight} iconProps={{ size: 25, style: { color: '#384047' } }}></Button1></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
