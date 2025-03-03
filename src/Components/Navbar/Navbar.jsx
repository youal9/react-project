import React, { useState } from 'react'
import "./Navbar.css"
import { Link, scroller} from 'react-scroll';
import logo from '../../assets/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'


function Navbar() {
    const [nav,setNav]=useState(false)
    const handelNav=()=>setNav(!nav)
  return (
    
    <div className='navbar'>
        <div className="nav-container">
            <div className="logo">
                <img src={logo} alt="" />
                
            </div>
            <ul className={nav ? 'nav-menu active':'nav-menu'}>
            <li><Link to="Hem">Om oss</Link></li>
            <li><Link to="utbildning">Utbildning</Link></li>
            <li><Link to="Pris">Pris</Link></li>
            <li><Link to="Kontakt">Contact</Link></li>
            
            </ul>
            <div className="hamburger" onClick={handelNav}>
                {!nav ?( <FaBars className="icon"/>): <FaTimes className="icon"/>}
               
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
