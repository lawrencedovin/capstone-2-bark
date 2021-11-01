import React, {useState} from 'react';
import UserInput from '../../forms/UserInput/UserInput';

function DogSearchFilter({breeds}) {

  const [breed, setBreed] = useState('All Breeds');
  const [zipcode, setZipcode] = useState('');
  let [disabledButton, setDisableButton] = useState(true);
  let [errorStylesDisplay, setErrorStylesDisplay] = useState(false);
  
  const breedOptions = breeds.map((breed) => {
    return <option className="dropdown-item dog-search-filter__button" value={breed.toLowerCase()}>{breed}</option>
  })

  

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormData(formData => ({
  //     ...formData,
  //     [name]: value
  //   }))
  // }

  const handleBreedChange = e => {
    alert(e.target.value);
    setBreed(e.target.value);
  };
  

  const handleZipcodeChange = (e) => {
    let inputLength = e.target.value.length;
    inputLength === 5 ? setDisableButton(false) : setDisableButton(true);
    inputLength > 5 ? setErrorStylesDisplay(true) : setErrorStylesDisplay(false);
    setZipcode(e.target.value);
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
                      name="zipcode" 
                      value={zipcode} 
                      type="text"
                      handleChange={handleZipcodeChange}
                      className="form-control dog-search-filter__input"
              />
            </div>
            <button className="btn dog-search-filter__button dog-search-filter__button--icon" href="/search" disabled={disabledButton}>
              <img src={process.env.PUBLIC_URL + 'icons/search-icon.svg'} className="dog-search-filter__icon--search" alt="search icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default DogSearchFilter;
