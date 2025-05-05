import React from 'react';
import './Pris.css';

function Pris() {
  return (
    <div className="cards" id="pris">
      <h1>Pris</h1>
      <div className="cards-containet">
        <div className="card-shadow">
          <ul>
            <li className="pack">Small Paket</li>
            <li className="pric">5000 kr</li>
            <li className="bottom-bar">✔ 5 körlektioner</li>
            <li className="bottom-bar">✔ Riskettan</li>
            <li>
              <button className="pris-btn pris-btn-small">Köp</button>
            </li>
          </ul>
        </div>

        <div className="card-activ">
          <ul>
            <li className="pack">Populär Paket</li>
            <li className="pric">15000 kr</li>
            <li className="bottom-bar">✔ 15 körlektioner</li>
            <li className="bottom-bar">✔ Riskettan</li>
            <li className="bottom-bar">✔ Risktvåan</li>
            <li className="bottom-bar">✔ Bokpaket</li>
            <li>
              <button className="pris-btn">Köp</button>
            </li>
          </ul>
        </div>

        <div className="card-shadow">
          <ul>
            <li className="pack">Medium Paket</li>
            <li className="pric">10000 kr</li>
            <li className="bottom-bar">✔ 10 körlektioner</li>
            <li className="bottom-bar">✔ Riskettan</li>
            <li className="bottom-bar">✔ Risktvåan</li>
            <li>
              <button className="pris-btn pris-btn-small">Köp</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pris;
