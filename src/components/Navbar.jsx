import React from 'react';
import Button1 from "./Button1.jsx";
import "../style/navbarStyle.css";
import { CiLock } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
          <ul class="nav-ul">
            <li><input type="search" className="search" placeholder="Search..." /></li>
            <li>Products</li>
            <li>Reviews </li>
            <li>Services</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li><Button1 label="Cart" icon={CiShoppingCart} iconProps={{ size: 25, style: { color: '#384047' } }}></Button1></li>
            <li><Button1 label="Login" icon={CiLock} iconProps={{ size: 25, style: { color: '#384047' } }}></Button1></li>
            <li><Button1 label="Sign Up" icon={CiCircleChevRight} iconProps={{ size: 25, style: { color: '#384047' } }}></Button1></li>
           
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
