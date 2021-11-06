import React, {useEffect, useState, useContext} from 'react';
import { useParams } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { getDogData } from '../../helpers/api-helpers';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import DetailsLikeButton from '../../components/buttons/DetailsLikeButton/DetailsLikeButton';
import DetailsUnlikeButton from '../../components/buttons/DetailsUnlikeButton/DetailsUnlikeButton';
import { patchData } from '../../helpers/api-helpers';

function DogDetails() {
  let { id } = useParams();
  id = parseInt(id);
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  let dogURL = `https://api.petfinder.com/v2/animals/${id}`;

  const {user, setUser} = useContext(UserContext);
  // Initializes state to check whether the dog ID is found in current user's dog list
  // Updates button to likedButton or unlikedButton.
  const [dogInList, setDogInList] = useState(user ? user.dogs.includes(id) : null);

  useEffect(() => {
    getDogData(dogURL, setDog, setLoading);
  }, [dogURL]);

  const addDog = (e) => {
    e.preventDefault();
    const user_id = user.id;
    const dog_id = id;
    let userDogs = user.dogs;
    userDogs.push(dog_id)
    if(!user.dogs.includes(dog_id)) setUser(...user, {dogs: userDogs});
    patchData(`/users/${user_id}/liked-dogs/${dog_id}/add-dog`)
    .then(data => {
      // alert(JSON.stringify(data));
    });
    setDogInList(!dogInList);
  }

  const removeDog = (e) => {
    e.preventDefault();
    const user_id = user.id;
    const dog_id = id;
    let userDogs = user.dogs;
    let dogIdIndex = userDogs.indexOf(dog_id);
    userDogs.splice(dogIdIndex, 1);
    if(user.dogs.includes(dog_id)) setUser(...user, {dogs: userDogs});
    patchData(`/users/${user_id}/liked-dogs/${dog_id}/remove-dog`)
    .then(data => {
      // alert(JSON.stringify(data));
    });
    setDogInList(!dogInList);
  }

  return(
    <div data-testid="DogDetails">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 mx-auto details">
              <div className="details__title-icon-container">
                {user ?
                  (dogInList
                    ? <DetailsUnlikeButton removeDog={removeDog} /> 
                    : <DetailsLikeButton addDog={addDog} />
                  )
                :
                <></>
                }
                <h1 className="details__title">{dog.title}</h1>
              </div>
            <div className="row">
              
              <div className="details__image-container col">
                <img className="details__image" src={dog.imgUrl1} alt={`Dog named ${dog.title}`}/>
              </div>
              <div className="details__image-container col">
                <img className="details__image" src={dog.imgUrl2} alt={`Dog named ${dog.title}`}/>
              </div>
              <div className="details__image-container col">
                <img className="details__image" src={dog.imgUrl3} alt={`Dog named ${dog.title}`}/>
              </div>
            </div>
            <div className="row">
              <p>{dog.breed} - {dog.location}</p>
              <p>{dog.age} - {dog.gender} - {dog.size}</p>
              <p>Status: <span className={dog.statusClass}>{dog.status}</span></p>
            </div>
            <div className="row details__section">
              <div className="details__section-title">About</div>
                <ul className="details__section-description list-unstyled">
                  <li><span className="details__section-description--black">House-Trained: </span>{dog.houseTrained}</li>
                  <li><span className="details__section-description--black">Health: </span>{dog.health}</li>
                  <li><span className="details__section-description--black">Good In A Home With: </span>{dog.goodWith}</li>
                  <li><span className="details__section-description--black">Prefers a Home Without: </span>{dog.notGoodWith}</li>
                </ul>
            </div>
            <div className="row details__section">
              <div className="details__section-title">Meet {dog.title}</div>
              <div className="details__section-description">
                <p>{dog.description}</p>
              </div>
            </div>
            <div className="row details__section">
              <div className="details__section-title">Contact</div>
                <ul className="details__section-description list-unstyled">
                  <li><span className="details__section-description--black">Email: </span>{dog.email}</li>
                  <li><span className="details__section-description--black">Phone: </span>{dog.phone}</li>
                  <li><span className="details__section-description--black">Address: </span>{dog.contactAddress}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  )
}

export default DogDetails;
