import React from 'react';
import PropTypes from 'prop-types';


const DogSearchFilter = () => (
  <div data-testid="DogSearchFilter">
    <div className="row">
      <div className="col-md-12">
        <form className="dog-search-filter text-center">
          <span class="dog-search-filter__label">Find Best Friend: </span>
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <div class="btn-group" role="group">
              <button id="dogSearchFilter" type="button" class="btn dropdown-toggle dog-search-filter__button dog-search-filter__button--dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                All Breeds
              </button>
              <ul class="dropdown-menu" aria-labelledby="dogSearchFilter">
                <li><a class="dropdown-item dog-search-filter__button" href="/">Husky</a></li>
                <li><a class="dropdown-item dog-search-filter__button" href="/">English Bulldog</a></li>
              </ul>
            </div>
            <div class="input-group">
              <input type="text" class="form-control dog-search-filter__input" placeholder="Zip Code" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
            <button type="button" class="btn-primary dog-search-filter__button dog-search-filter__button--icon">
              <img src={process.env.PUBLIC_URL + 'icons/search-icon.svg'} class="dog-search-filter__icon--search" alt="search icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

DogSearchFilter.propTypes = {};

DogSearchFilter.defaultProps = {};

export default DogSearchFilter;
