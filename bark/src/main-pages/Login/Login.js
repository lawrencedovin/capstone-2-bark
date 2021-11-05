import React, { useState, useContext } from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';
import UserInput from '../../components/forms/UserInput/UserInput';
import { UserContext } from '../../context/UserContext';
import { postData } from '../../helpers/api-helpers';

function Login() {

  const {user, setUser} = useContext(UserContext);

  const FORM_INPUT_INITIAL_STATE = {
    username: '',
    password: ''
  };

  const [formData, setFormData] = useState(FORM_INPUT_INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = ((e) => {
    e.preventDefault();
    const { username, password } = formData;
    postData('/users/login', { username, password })
    .then(data => {
      if(data.hasOwnProperty('user')) {
        alert(`${data.user.username} successfully logged in!`);
      }
      else {
        alert(`${data.error.message}`)
      }
    });
    setFormData(FORM_INPUT_INITIAL_STATE);
  })

  return(
    <div data-testid="Login">
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
