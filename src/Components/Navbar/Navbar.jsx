import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // justera tröskel om du vill
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="hero" smooth={true} duration={500} offset={-80} className="logo">
          <img src={logo} alt="" />
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="oss" smooth={true} duration={500} offset={-80} onClick={handleClick}>Om oss</Link></li>
          <li><Link to="data" smooth={true} duration={500} offset={-80} onClick={handleClick}>Utbildning</Link></li>
          <li><Link to="pris" smooth={true} duration={500} offset={-80} onClick={handleClick}>Pris</Link></li>
          <li><Link to="kontakt" smooth={true} duration={500} offset={-80} onClick={handleClick}>Kontakt</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
