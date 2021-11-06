import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { patchData } from '../../../helpers/api-helpers';
import CardLikeButton from '../../buttons/CardLikeButton/CardLikeButton';
import CardUnlikeButton from '../../buttons/CardUnlikeButton/CardUnlikeButton';

function Cards({dogId, imgUrl, title, description, btnText, link, status, statusClass}) {

  const {user, setUser} = useContext(UserContext);
  // Initializes state to check whether the dog ID is found in current user's dog list
  // Updates button to likedButton or unlikedButton.
  const [dogInList, setDogInList] = useState(user ? user.dogs.includes(dogId) : null);

  const addDog = (e) => {
    e.preventDefault();
    const user_id = user.id;
    const dog_id = dogId;
    let userDogs = user.dogs;
    userDogs.push(dog_id)
    if(!user.dogs.includes(dog_id)) setUser(...user, {dogs: userDogs});
    patchData(`/users/${user_id}/liked-dogs/${dog_id}/add-dog`)
    .then(data => {
      // alert(JSON.stringify(data));
    });
    setDogInList(!dogInList);
    // alert(user.dogs);
  }

  const removeDog = (e) => {
    e.preventDefault();
    const user_id = user.id;
    const dog_id = dogId;
    let userDogs = user.dogs;
    let dogIdIndex = userDogs.indexOf(dog_id);
    userDogs.splice(dogIdIndex, 1);
    if(user.dogs.includes(dog_id)) setUser(...user, {dogs: userDogs});
    patchData(`/users/${user_id}/liked-dogs/${dog_id}/remove-dog`)
    .then(data => {
      // alert(JSON.stringify(data));
    });
    setDogInList(!dogInList);
    // alert(user.dogs);
  }

  return(
    <div data-testid="Cards">
      <div className="logged-in-card">
        <div className="logged-in-card__img-body-container">
          <div className="logged-in-card__img-container">
            <img className="logged-in-card__img" src={imgUrl} alt={title} />
          </div>
          {user ?
          (dogInList
              ? <CardUnlikeButton removeDog={removeDog} /> 
              : <CardLikeButton addDog={addDog} />
          )
          :
          <></>
          }
          <div className="card-body logged-in-card__body">
            <h5 className="card-title logged-in-card__title">{title}</h5>
            {description 
            ? 
            <div className="logged-in-card__description-container">
              <p className="card-text logged-in-card__description">Breed: {description.breed}</p>
              <p className="card-text logged-in-card__description">Location: {description.location}</p>
              <p className={`card-text logged-in-card__description`}>Status: <span className={`${statusClass}`}>{status}</span></p>
            </div>
            :
            <></>
            }
          </div>
        </div>
        <Link to={link} className="btn logged-in-card__button">{btnText}</Link>
      </div>
    </div>
  );
}

export default Cards;
