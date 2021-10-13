import React, {useState} from 'react';

function DogSearchFilter() {

  const [breed, setBreed] = useState('All Breeds');

  const handleChange = e => {
    setBreed(e.target.value);
  };

  return (
  <div data-testid="DogSearchFilter">
    <div className="row">
      <div className="col-md-12">
        <form className="dog-search-filter text-center">
          <span class="dog-search-filter__label">Find Best Friend: </span>
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <select name="breeds" class="dog-search-filter__button dog-search-filter__button--dropdown" value={breed} onChange={handleChange}>
              <option class="dropdown-item dog-search-filter__button" value={"all breeds"}>All Breeds</option>
              <option class="dropdown-item dog-search-filter__button" value={"husky"}>Husky</option>
              <option class="dropdown-item dog-search-filter__button" value={"english bulldog"}>English Bulldog</option>
            </select>
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
}

export default DogSearchFilter;
