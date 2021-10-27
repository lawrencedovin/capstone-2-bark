import React, { useState } from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';
import UserInput from '../../components/forms/UserInput/UserInput';

function Register() {

  const FORM_INPUT_INITIAL_STATE = {
    username: '',
    email: '',
    zipcode: '',
    password: ''
  };

  const [formData, setFormData] = useState(FORM_INPUT_INITIAL_STATE);

  let [disabledButton, setDisableButton] = useState(true);
  let [errorStylesDisplay, setErrorStylesDisplay] = useState(false);

  const handleZipcodeChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
    let inputLength = e.target.value.length;
    inputLength === 5 ? setDisableButton(false) : setDisableButton(true);
    inputLength > 5 ? setErrorStylesDisplay(true) : setErrorStylesDisplay(false);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  // Example POST method implementation:
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { username, email, zipcode, password } = formData;
    postData('/users', { username, email, zipcode, password })
    .then(data => {
      console.log(data.json)
      alert(JSON.stringify(data)); // JSON data parsed by `data.json()` call
    });
    setFormData(FORM_INPUT_INITIAL_STATE);
  }

  return(
    <div data-testid="Register">
        <svg xmlnsXlink="http://www.w3.org/2000/svg" style={{display: 'none'}}>
          <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </symbol>
          <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </symbol>
          <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </symbol>
        </svg>
        <div class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
          <svg class="bi flex-shrink-0 me-4" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
          <p className="alert__content">An example success alert with an icon</p>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="row">
            <div className="col">
              <img src={process.env.PUBLIC_URL + 'images/forms/register-form-photo.jpg'} alt="register dog" className="forms__image" />
            </div>
            <div className="col forms__container">
              <form className="forms col-md-8" onSubmit={handleSubmit}>
                <h1 className="forms__title">Create an Account</h1>
                <p className="forms__description">Please fill out the form to create an account.</p>
                <div class="input-group forms__input-container align-items-center">
                  <UserInput 
                      name="username" 
                      value={formData.username} 
                      type="text"
                      handleChange={handleChange}
                      className="form-control forms__input"
                  />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-user"></i>
                  </span>
                </div>
                <div class="input-group forms__input-container align-items-center">
                  <UserInput 
                        name="email" 
                        value={formData.email} 
                        type="email"
                        handleChange={handleChange}
                        className="form-control forms__input"
                    />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-envelope"></i>
                  </span>
                </div>
                {errorStylesDisplay === true 
                ? 
                <p className="forms__error-message">Zipcode should be 5 characters long.</p>
                :
                <p className="forms__description-message">Zipcode should be 5 characters long.</p>
                }
                <div class="input-group forms__input-container align-items-center">
                  <UserInput 
                        name="zipcode" 
                        value={formData.zipcode} 
                        type="number"
                        handleChange={handleZipcodeChange}
                        className={errorStylesDisplay === true ? "form-control forms__input forms__input--error" : "form-control forms__input"}
                  />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div class="input-group forms__input-container align-items-center">
                  <UserInput 
                        name="password" 
                        value={formData.password} 
                        type="password"
                        handleChange={handleChange}
                        className="form-control forms__input"
                  />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-lock"></i>
                  </span>
                </div>
                <button class="btn forms__button d-flex justify-content-between align-items-center"  disabled={disabledButton}>
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