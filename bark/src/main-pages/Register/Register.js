import React, { useState } from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';
import UserInput from '../../components/forms/UserInput/UserInput';

function Register() {

  // const [state, setState] = useState({data: null});

  // const componentDidMount = () => {
  //     callBackendAPI()
  //       .then(res => setState({ data: res.users }))
  //       .catch(err => console.log(err));
  // }
  // fetching the GET route from the Express server which matches the GET route from server.js
  // const callBackendAPI = async () => {
  //   const response = await fetch('/users');
  //   const body = await response.json();
  //   // console.log(response, body);

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  // componentDidMount();

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

  const handleSubmit = ((e) => {
    e.preventDefault();
    const { username, email, zipcode, password } = formData;
    alert(`Created user: ${username}-${email}-${zipcode}-${password}`);
    setFormData(FORM_INPUT_INITIAL_STATE);
  })

  return(
    <div data-testid="Register">
        <div className="row">
            <div className="col">
              <img src={process.env.PUBLIC_URL + 'images/forms/register-form-photo.jpg'} alt="register dog" className="forms__image" />
            </div>
            <div className="col forms__container">
              <form className="forms col-md-8" onSubmit={handleSubmit}>
                <h1 className="forms__title">Create an Account</h1>
                {/* <ul>
                {state.data ?
                state.data.map(person => 
                  <ul>
                  <li>{person.id}</li>
                  <li>{person.username}</li>
                  <li>{person.breeds}</li>
                  </ul>
                )
                :
                <></>
                }
                </ul> */}
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