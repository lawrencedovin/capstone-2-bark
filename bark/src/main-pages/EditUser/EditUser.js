import React, { useState } from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';

function EditUser() {

  let [zipcode, setZipcode] = useState('');
  let [disabled, setDisable] = useState(false);

  const handleChange = (event) => {
    setZipcode(event.target.value);
    let inputLength = event.target.value.length;
    inputLength > 4 ? setDisable(true) : setDisable(false);
  }

  return(
    <div data-testid="EditUser">
        <div className="row">
            <div className="col-md-12 forms__container">
              <form className="forms col-md-4">
                <h1 className="forms__title">Edit Profile</h1>
                <p className="forms__description">Update your user credentials and save changes.</p>
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
                {disabled === true 
                ? 
                <p className="forms__error-message">Zipcode should be 4 characters long.</p>
                :
                <></>
                }
                <div class="input-group forms__input-container align-items-center">
                  <input type="number" placeholder="Zipcode" className={disabled === true ? "form-control forms__input forms__input--error" : "form-control forms__input"} onChange={handleChange} />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <p>To confirm changes, enter your password.</p>
                <div class="input-group forms__input-container align-items-center">
                  <input type="password" placeholder="Password" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-lock"></i>
                  </span>
                </div>
                <button href="#" class="btn forms__button d-flex justify-content-between align-items-center" disabled={disabled}>
                  Save Changes
                  <img src={process.env.PUBLIC_URL + 'icons/button-arrow.svg'} alt="Form Button" class="forms__button-icon" />
                </button>
              </form>
            </div>
        </div>
        <FormFooter/>
    </div>
  );
}

export default EditUser;
