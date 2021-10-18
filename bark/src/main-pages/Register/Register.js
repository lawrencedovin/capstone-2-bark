import React from 'react';

function Register() {
  return(
    <div data-testid="Register">
        <div className="row">
            <div className="col">
              <img src={process.env.PUBLIC_URL + 'images/forms/register-form-photo.jpg'} alt="register dog" className="forms__image" />
            </div>
            <div className="col forms__container">
              <form className="forms col-md-8">
                <h1 className="forms__title">Create an Account</h1>
                <p className="forms__description">Please fill out the form to create an account</p>
                
                <div class="input-group forms__input-container align-items-center">
                  <input type="text" placeholder="Username" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-user"></i>
                  </span>
                </div>
                <div class="input-group forms__input-container align-items-center">
                  <input type="text" placeholder="Email" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-envelope"></i>
                  </span>
                </div>
                <div class="input-group forms__input-container align-items-center">
                  <input type="password" placeholder="Password" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-lock"></i>
                  </span>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              
            </div>
        </div>
    </div>
  );
}

export default Register;