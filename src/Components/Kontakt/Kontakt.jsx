import React from 'react'
import './Kontakt.css'
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";



function Kontakt() {
  return (
 <div className='kontakt'>
       
    <div className="kontakt-content">
            <h1>Kontakta oss</h1>
        </div>
        <div className="kontakt-container">
            <div className="kontaktinfo">
                <div className="box">
                    <div className="icon"><FaMapMarkerAlt /></div>
                    <div className="text">
                        <h3>Adress</h3>
                        <p>Pyramidvägen</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><FaEnvelope /> </div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>NextGen@outlook.com</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <FaPhone />
                    </div>
                    <div className="text">
                        <h3>Tel</h3>
                        <p>0712345678</p>
                    </div>
                </div>
            </div>
         <div className="map">
            <iframe
             width="130%" 
             height="350" 
             frameBorder="0" 
             scrolling="no" 
             marginHeight="0" 
             marginWidth="0" 
             src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Pyramidv%C3%A4gen+(My%20BusinesPyramidv%C3%A4gens%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
             <a href="https://www.gps.ie/collections/drones/">buy drones</a>
            </iframe>
        </div>
    </div>
      
  </div>
  )
}

export default Kontakt
