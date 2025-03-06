import React, { useState } from 'react'
import "./Navbar.css"
import { Link} from 'react-scroll';
import logo from '../../assets/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'


function Navbar() {
    const [click, setClick] = useState(false)
 

    const handleClick=()=>{
        setClick(!click)
    }
  return (
    
    <div className='navbar'>
        <div className="nav-container">
            <Link to="hero"smooth={true}  duration={500} offset={-80} onClick={handleClick} className="logo">
                <img src={logo} alt="" />
                
            </Link>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
            <li><Link to="oss" smooth={true}  duration={500} offset={-80}  onClick={handleClick}>Om oss</Link></li>
            <li><Link to="data"smooth={true}  duration={500} offset={-80} onClick={handleClick}>Utbildning</Link></li>
            <li><Link to="pris"smooth={true}  duration={500} offset={-80} onClick={handleClick}>pris</Link></li>
            <li><Link to="kontakt"smooth={true}  duration={500} offset={-80} onClick={handleClick}>Kontakt</Link></li>
            
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ?<FaTimes className="icon"/>: ( <FaBars className="icon"/>)}
               
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
