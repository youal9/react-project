import React from 'react';
import './Oss.css';
import pov from '../../assets/pov1.jpg';
import car from '../../assets/car.jpg';

function Oss() {
  return (
    <div className='oss'>
        <h1>Om oss</h1> 
        <div className="oss-content"> 
            <div className="content">
                <img src={pov} alt="Nordic Driving Academy" />
            </div>
            <div className="oss-container">
                <h3>Om oss</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod id tellus sed scelerisque. 
                    Quisque iaculis malesuada blandit. Ut nec diam commodo, molestie purus gravida, maximus erat. 
                    Aenean id nunc at lorem malesuada gravida a et mauris. Sed id augue ultrices, dignissim magna ut, 
                    sollicitudin ipsum.
                </p>
            </div>
            <div className="oss-container">
                <h3>NextGen Trafikskola</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod id tellus sed scelerisque. 
                    Quisque iaculis malesuada blandit. Ut nec diam commodo, molestie purus gravida, maximus erat. 
                    Aenean id nunc at lorem malesuada gravida a et mauris. Sed id augue ultrices, dignissim magna ut, 
                    sollicitudin ipsum.
                </p>
            </div>
            <div className="content">
                <img src={car} alt="Nordic Driving Academy" />
            </div>
            
        </div>
    </div>
  );
}

export default Oss;
