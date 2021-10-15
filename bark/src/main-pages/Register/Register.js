import React from 'react';


function Register() {
  return(
    <div data-testid="Register">
        <div className="row register">
            <div className="col">
              <img src={process.env.PUBLIC_URL + 'images/forms/register-form-photo.jpg'} alt="register dog" className="register__image" />
            </div>
            <div className="col register__form-container">
              form
              <form action="" className="register__form">

              </form>
            </div>
        </div>
    </div>
  );
}

export default Register;
