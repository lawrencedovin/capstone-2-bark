import React from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';

function Login() {
  return(
    <div data-testid="Login">
        <div className="row">
            <div className="col">
              <img src={process.env.PUBLIC_URL + 'images/forms/login-form-photo.jpg'} alt="register dog" className="forms__image" />
            </div>
            <div className="col forms__container">
              <form className="forms col-md-8">
                <h1 className="forms__title">Login</h1>
                <p className="forms__description">Enter your user credentials to login</p>
                <div class="input-group forms__input-container align-items-center">
                  <input type="text" placeholder="Username" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-user"></i>
                  </span>
                </div>
                <div class="input-group forms__input-container align-items-center">
                  <input type="password" placeholder="Password" className="form-control forms__input" />
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