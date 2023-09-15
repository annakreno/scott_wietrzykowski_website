import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import name from '../../images/name.png';
import "./NavBar.css"

export default function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const activeLinkClass = function(path) {
    if (location.pathname === path) { 
        return 'active-nav-links'
    } 
    else if (location.pathname.slice(0,12) === path ) {
        return 'active-nav-links'
    } 
    else if (location.pathname.slice(0,7) === path) {
        return 'active-nav-links'
    } 
    else {
        return 'nav-links'
    }
};
    return (
      <div className={`nav-container ${menuOpen ? 'menu-open' : 'menu-close'}`}>
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`menu-bar ${menuOpen ? 'open' : ''}`} />
          <div className={`menu-bar ${menuOpen ? 'open' : ''}`} />
          <div className={`menu-bar ${menuOpen ? 'open' : ''}`} />
        </div>
        <div className='nav-links' id="navLogo">
          <Link to="/" onClick={closeMenu}><img src={name} /></Link>
        </div>
        <div className={activeLinkClass('/about')}>
          <Link to="/about" onClick={closeMenu}>about</Link>
        </div>
        {/* <div className={activeLinkClass('/credits')}>
          <Link to="/credits" onClick={closeMenu}>credits</Link>
        </div> */}
        <div className={activeLinkClass('/equipment')}>
          <Link to="/equipment" onClick={closeMenu}>equipment</Link>
        </div>
        <div className={activeLinkClass('/work')}>
          <Link to="/work" onClick={closeMenu}>work</Link>
        </div>
        <div className={activeLinkClass('/contact')}>
          <Link to="/contact" onClick={closeMenu}>contact</Link>
        </div>
      </div>
    );
  }