import React from 'react';
import './Data.css';
import Utbildning from '../../assets/Utbildning'; // Ta bort onödig extra import

function Data() {
  return (
    <div className='data'>
      <h1> Utbildningar</h1>
      <div className="utbildningar-container">
        {Utbildning.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.titel} />
            <h3>{item.titel}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
