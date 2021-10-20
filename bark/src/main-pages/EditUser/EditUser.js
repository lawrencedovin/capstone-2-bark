import React from 'react';
import FormFooter from '../../components/footers/FormFooter/FormFooter';

function EditUser() {
  return(
    <div data-testid="EditUser">
        <div className="row">
            <div className="col-md-12 forms__container">
              <form className="forms col-md-4">
                <h1 className="forms__title">Edit Profile</h1>
                <p className="forms__description">Update your user credentials and save changes</p>
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
                <p>To confirm changes, enter your password</p>
                <div class="input-group forms__input-container align-items-center">
                  <input type="password" placeholder="Password" className="form-control forms__input" />
                  <span class="input-group-btn forms__input-icon align-middle">
                      <i class="fas fa-lock"></i>
                  </span>
                </div>
                <button href="#" class="forms__button d-flex justify-content-between align-items-center">
                  Save Changes
                  {/* <img src={process.env.PUBLIC_URL + 'icons/button-arrow.svg'} alt="Form Button" class="forms__button-icon" /> */}
                  <img src='public/icons/button-arrow.svg' alt="Form Button" class="forms__button-icon" />
                </button>
              </form>
            </div>
        </div>
        <FormFooter/>
    </div>
  );
}

export default EditUser;
