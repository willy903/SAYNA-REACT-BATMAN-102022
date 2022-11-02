 import React from 'react';
 import logoHome from '../assets/logos/logohome.png';
 import { NavLink } from 'react-router-dom';
 import '../styles/NavBar.css';

 function NavBar() {
     return ( 
        <nav className="navbar navbar-expand-lg py-0">
  <div className="contant d-flex justify-content-between px-4 bordur">
    <NavLink to={'home'} className="navbar-brand">
      <img src={logoHome} alt="" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink to={'home'} className="nav-link" aria-current="page">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'game'} className="nav-link" >GAME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'eshop'} className="nav-link">ESHOP</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'moncompte'} className="nav-link" >MON COMPTE</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
     )
 }

 export default NavBar