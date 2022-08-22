import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import UserInput from '../../forms/UserInput/UserInput';

function DogSearchFilter({breeds}) {

  const navigate = useNavigate();
  const [breed, setBreed] = useState('all breeds');
  const [postcode, setPostcode] = useState('');
  let [disabledButton, setDisableButton] = useState(true);
  let [errorStylesDisplay, setErrorStylesDisplay] = useState(false);
  
  const breedOptions = breeds.map((breed) => {
    return <option className="dropdown-item dog-search-filter__button" value={breed.toLowerCase()}>{breed}</option>
  })

  const handleBreedChange = e => {
    setBreed(e.target.value);
  };
  

  const handlePostcodeChange = (e) => {
    let inputLength = e.target.value.length;
    inputLength === 5 ? setDisableButton(false) : setDisableButton(true);
    inputLength > 5 ? setErrorStylesDisplay(true) : setErrorStylesDisplay(false);
    setPostcode(e.target.value);
  }

  const navigateToDogSearch = () => {
    return navigate(`/search/breeds=${breed}&postcode=${postcode}`);
  }

  return (
  <div data-testid="DogSearchFilter">
    <div className="row">
      <div className="col-md-12">
        <form className="dog-search-filter text-center">
          <span className="dog-search-filter__label">Find Best Friend: </span>
          <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <select name="breeds" className="dog-search-filter__button dog-search-filter__button--dropdown" value={breed} onChange={handleBreedChange}>
              {breedOptions}
            </select>
            <div className="input-group">
              <UserInput 
                      name="postcode" 
                      value={postcode} 
                      type="text"
                      handleChange={handlePostcodeChange}
                      className="form-control dog-search-filter__input"
              />
            </div>
            <button className="btn dog-search-filter__button dog-search-filter__button--icon" disabled={disabledButton} onClick={navigateToDogSearch}>
              <img src={process.env.PUBLIC_URL + '/icons/search-icon.svg'} className="dog-search-filter__icon--search" alt="search icon" />
            </button>
            <Link className="nav-link navbar__link" to="/hello">Click ME!</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default DogSearchFilter;