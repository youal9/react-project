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
            <div className="logo">
                <img src={logo} alt="" />
                
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
            <li><Link to="oss" smooth={true}  duration={500} offset={-80}  onClick={handleClick}>Om oss</Link></li>
            <li><Link to="data"smooth={true}  duration={500} offset={-80} onClick={handleClick}>Utbildning</Link></li>
            <li><Link to="Pris">Pris</Link></li>
            <li><Link to="Kontakt">Contact</Link></li>
            
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ?<FaTimes className="icon"/>: ( <FaBars className="icon"/>)}
               
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
