import React, { useState, useContext } from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';
import UserInput from '../../components/forms/UserInput/UserInput';
import { UserContext } from '../../context/UserContext';
import { countdown } from '../../helpers/general-helpers';
import { postData } from '../../helpers/api-helpers';

function Login() {

  const {user, setUser} = useContext(UserContext);

  const FORM_INPUT_INITIAL_STATE = {
    username: '',
    password: ''
  };

  const ALERT_INITIAL_STATE = {
    visible: false,
    content: '',
    type: ''
  }

  const [formData, setFormData] = useState(FORM_INPUT_INITIAL_STATE);
  const [alertData, setAlertData] = useState(ALERT_INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const resetShowAlert = () => setAlertData(ALERT_INITIAL_STATE);

  const handleSubmit = ((e) => {
    e.preventDefault();
    const { username, password } = formData;
    postData('/users/login', { username, password })
    .then(data => {
      setAlertData(alertData => ({...alertData, 'visible': true}));
      countdown(resetShowAlert);
      if(data.hasOwnProperty('user')) {
        setAlertData(alertData => ({...alertData, 'content': `${data.user.username} successfully logged in!`}));
        setUser(data.user);
        // alert(JSON.stringify(data.user));
      }
      else {
        setAlertData(alertData => ({...alertData, 'type': 'error', 'content': `${data.error.message}`}));
      }
    });
    setFormData(FORM_INPUT_INITIAL_STATE);
  })

  return(
    <div data-testid="Login">
      {alertData.visible
      ?
      <>
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
        <div 
          className={alertData.type === 'error' 
                    ? "alert alert-warning d-flex align-items-center alert-dismissible fade show" 
                    : "alert alert-success d-flex align-items-center alert-dismissible fade show"} 
          role="alert"
        >
          <svg class="bi flex-shrink-0 me-4" width="24" height="24" role="img" 
            aria-label={alertData.type === 'error' ? "Warning:" : "Success:"}>
            <use xlinkHref={alertData.type === 'error' ? "#exclamation-triangle-fill" : "#check-circle-fill"}/>
          </svg>
          <p className="alert__content">{alertData.content}</p>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={resetShowAlert}></button>
        </div>
      </>
      :
      <></>
      }
      <div className="row">
          <div className="col">
            <img src={process.env.PUBLIC_URL + 'images/forms/login-form-photo.jpg'} alt="register dog" className="forms__image" />
          </div>
          <div className="col forms__container">
            <form className="forms col-md-8" onSubmit={handleSubmit}>
              <h1 className="forms__title">Login</h1>
              <p className="forms__description">Enter your user credentials to login.</p>
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
              <button href="#" class="forms__button d-flex justify-content-between align-items-center">
                Login
                <img src={process.env.PUBLIC_URL + 'icons/button-arrow.svg'} alt="Form Button" class="forms__button-icon" />
              </button>
            </form>
          </div>
      </div>
      <FormFooter/>
    </div>
  );
}

export default Login;
