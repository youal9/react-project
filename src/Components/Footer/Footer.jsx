// src/Footer.js
import React, { useState } from 'react';
import './Footer.css'; 
import logo from '../../assets/logo.png'
import klarna from '../../assets/klarna.png'
import swish from '../../assets/Swish.png'
import {FaInstagram ,FaFacebookF,FaTwitter } from "react-icons/fa";



import { Link } from 'react-scroll';

const Footer = () => {

    const [click,setClick]=useState(false)

    const handleClick =()=>{
        setClick(!click) 
    }
    return (
        <section className='footer'>
            
            <div className="footer-content">
              
                <Link to="hero"smooth={true}  duration={500} offset={-80} onClick={handleClick} >
                  <img src={logo} alt="" className='logoo'/>
                </Link>                
                            
                <div className="icon">
                    <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                    <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                    <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer'>
                    <FaTwitter />
                    </a>
                </div>
            </div>
            <div className="footer-content">
              <h4>Betalningssätt</h4>
              <img  src={klarna} className='klarna' alt="" />
              <img src={swish} className='swish' alt="" />
            </div>
            <div className="footer-content">
              <h4>Våra tjänster</h4>
              <li><a href=""></a> Delbetalning</li>
              <li><a href=""></a>Erbjudande </li>
              <li><a href=""></a>Intensivkurs bil</li>
              <li><a href=""></a>Syntest</li>
            </div>
            <div className="footer-content">
              <h4>Receptionens öppettider</h4>
              <li> Månd-Tors:	10:00 - 18:00</li>
              <li> Fredagar:	10:00 - 15:00 </li>
             
             
            </div>
        </section>
    );
}

export default Footer;
