import React from 'react';
import './Boka.css';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BokaForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(' Bokning mottagen!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });

    e.target.reset(); // Rensa formuläret om du vill
  };

  return (
    <div className="boka-section" id="boka">
      <h2>Boka Körlektion</h2>
      <form className="boka-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">Förnamn</label>
          <input type="text" id="fname" name="fname" required />
        </div>

        <div className="form-group">
          <label htmlFor="lname">Efternamn</label>
          <input type="text" id="lname" name="lname" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefonnummer</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label>Välj typ av körning</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="typ" value="Automat" required />
              Automat
            </label>
            <label>
              <input type="radio" name="typ" value="Manuell" required />
              Manuell
            </label>
          </div>
        </div>

        <button type="submit" className="boka-btn">Boka</button>
      </form>

      {/* Toast container – krävs för att visa meddelandet */}
      <ToastContainer />
    </div>
  );
}

export default BokaForm;
