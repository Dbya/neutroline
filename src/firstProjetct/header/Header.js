import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import './header.css';


const Header = () => {
  return (
   <div className="mainHeader">
   <div className="logo">neutroLine</div>
    <nav>
    <input type="checkbox" id="check"/>
     <label htmlFor="check" className="checkBtn">
     <i className='fas fa-bars'></i></label>
    <ul className="navList">
    <li><a href="">Features</a> </li>
    <li><a href="">Company</a> </li>
    <li><a href="">Carrers</a> </li>
    <li><a href="">About</a> </li>
    </ul>
    </nav>
    <div className="">
    <a href="/ " className="buttonL"> <button>Login</button> </a>
    <a href=" /" className="buttonR"> <button>Register</button> </a>
   </div>
  
   </div>
  )
}

export default Header