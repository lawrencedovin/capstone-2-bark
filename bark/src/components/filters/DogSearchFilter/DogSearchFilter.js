import React, {useState} from 'react';

function DogSearchFilter({breeds}) {
  
  const breedOptions = breeds.map((breed) => {
    return <option className="dropdown-item dog-search-filter__button" value={breed.toLowerCase()}>{breed}</option>
  })

  const [breed, setBreed] = useState('All Breeds');

  const handleChange = e => {
    // alert(e.target.value)
    setBreed(e.target.value);
  };

  return (
  <div data-testid="DogSearchFilter">
    <div className="row">
      <div className="col-md-12">
        <form className="dog-search-filter text-center">
          <span className="dog-search-filter__label">Find Best Friend: </span>
          <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <select name="breeds" className="dog-search-filter__button dog-search-filter__button--dropdown" value={breed} onChange={handleChange}>
              {breedOptions}
            </select>
            <div className="input-group">
              <input type="text" className="form-control dog-search-filter__input" placeholder="Zip Code" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
            <a className="btn-primary dog-search-filter__button dog-search-filter__button--icon" href="/search">
              <img src={process.env.PUBLIC_URL + 'icons/search-icon.svg'} className="dog-search-filter__icon--search" alt="search icon" />
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default DogSearchFilter;
