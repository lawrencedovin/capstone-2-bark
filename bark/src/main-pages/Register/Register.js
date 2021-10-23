import React, { useState } from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';

function Register() {

  let [zipcode, setZipcode] = useState('');
  let [disabledButton, setDisableButton] = useState(true);
  let [errorStylesDisplay, setErrorStylesDisplay] = useState(false);

  const handleChange = (event) => {
    setZipcode(event.target.value);
    let inputLength = event.target.value.length;
    inputLength === 4 ? setDisableButton(false) : setDisableButton(true);
    inputLength > 4 ? setErrorStylesDisplay(true) : setErrorStylesDisplay(false);
  }

  return(
    <div data-testid="Register">
        <div className="row">
            <div className="col">
              <img src={process.env.PUBLIC_URL + 'images/forms/register-form-photo.jpg'} alt="register dog" className="forms__image" />
            </div>
            <div className="col forms__container">
              <form className="forms col-md-8">
                <h1 className="forms__title">Create an Account</h1>
                <p className="forms__description">Please fill out the form to create an account.</p>
                <div class="input-group forms__input-container align-items-center">
                  <input type="text" placeholder="Username" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-user"></i>
                  </span>
                </div>
                <div class="input-group forms__input-container align-items-center">
                  <input type="email" placeholder="Email" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-envelope"></i>
                  </span>
                </div>
                {errorStylesDisplay === true 
                ? 
                <p className="forms__error-message">Zipcode should be 4 characters long.</p>
                :
                <p className="forms__description-message">Zipcode should be 4 characters long.</p>
                }
                <div class="input-group forms__input-container align-items-center">
                  <input type="number" placeholder="Zipcode" className={errorStylesDisplay === true ? "form-control forms__input forms__input--error" : "form-control forms__input"} onChange={handleChange} />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div class="input-group forms__input-container align-items-center">
                  <input type="password" placeholder="Password" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-lock"></i>
                  </span>
                </div>
                <button href="#" class="btn forms__button d-flex justify-content-between align-items-center"  disabled={disabledButton}>
                  Register
                  <img src={process.env.PUBLIC_URL + 'icons/button-arrow.svg'} alt="Form Button" class="forms__button-icon" />
                </button>
              </form>
            </div>
        </div>
        <FormFooter/>
    </div>
  );
}

export default Register;