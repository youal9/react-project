import React from 'react'
import "./Hero.css"
import 'animate.css';
import { Link } from 'react-scroll';



const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero-content">
                <h1 className='animate__animated animate__fadeInDown'>Välkommen till NextGen Trafikskola</h1>
                <Link to="boka" smooth={true} duration={500} offset={-80}>
                    <button className='btnn-hero'>Boka nu</button>
                 </Link>
            </div>
            
        </div>
      
    </div>
  )
}

export default Hero
