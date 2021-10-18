import React from 'react';


function Register() {
  return(
    <div data-testid="Register">
        <div className="row register">
            <div className="col">
              <img src={process.env.PUBLIC_URL + 'images/forms/register-form-photo.jpg'} alt="register dog" className="register__image" />
            </div>
            <div className="col register__form-container">
              {/* <form action="" className="register__form">
              </form> */}
              <form className="register__form col-md-8">
                <h1 className="register__form-title">Create an Account</h1>
                <p className="register__form-description">Please fill out the form to create an account</p>
                
                <div class="input-group register__form-input-container align-items-center">
                  <input type="text" placeholder="Username" className="form-control register__form-input" />
                  <span class="input-group-btn register__form-input-icon align-middle">
                      <i class="fas fa-user"></i>
                  </span>
                </div>
                <div class="input-group register__form-input-container align-items-center">
                  <input type="text" placeholder="Email" className="form-control register__form-input" />
                  <span class="input-group-btn register__form-input-icon align-middle">
                      <i class="fas fa-envelope"></i>
                  </span>
                </div>
                <div class="input-group register__form-input-container align-items-center">
                  <input type="password" placeholder="Password" className="form-control register__form-input" />
                  <span class="input-group-btn register__form-input-icon align-middle">
                      <i class="fas fa-lock"></i>
                  </span>
                </div>
                {/* <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              
            </div>
        </div>
    </div>
  );
}

export default Register;
