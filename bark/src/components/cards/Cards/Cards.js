import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { patchData } from '../../../helpers/api-helpers';
import LikeButton from '../../buttons/LikeButton/LikeButton';
import UnlikeButton from '../../buttons/UnlikeButton/UnlikeButton';
import DogListButton from '../../buttons/DogListButton/DogListButton';

function Cards({dogId, imgUrl, title, description, btnText, link, status, statusClass}) {

  const {user, setUser} = useContext(UserContext);

  const addDog = () => {
    const user_id = user.id;
    const dog_id = dogId;
    patchData(`/users/${user_id}/liked-dogs/${dog_id}/add-dog`)
    .then(data => {
      alert(JSON.stringify(data));
    });
    let userDogs = user.dogs;
    userDogs.push(dog_id)
    if(!user.dogs.includes(dog_id)) setUser(...user, {dogs: userDogs});
    alert(user.dogs);
  }

  const removeDog = () => {
    const user_id = user.id;
    const dog_id = dogId;
    patchData(`/users/${user_id}/liked-dogs/${dog_id}/remove-dog`)
    .then(data => {
      alert(JSON.stringify(data));
    });
    let userDogs = user.dogs;
    let dogIdIndex = userDogs.indexOf(dog_id);
    userDogs.splice(dogIdIndex, 1);
    if(user.dogs.includes(dog_id)) setUser(...user, {dogs: userDogs});
    alert(user.dogs);
  }
  
  let inDogList;
  let clickHandle;
  if(user) {
    if(user.dogs.includes(dogId)) {
      inDogList = true;
      clickHandle = removeDog;
    }
    else {
      inDogList = false;
      clickHandle = addDog;
    }
  }

  return(
    <div data-testid="Cards">
      <div className="logged-in-card">
        <div className="logged-in-card__img-body-container">
          <div className="logged-in-card__img-container">
            <img className="logged-in-card__img" src={imgUrl} alt={title} />
          </div>
          {user
          ?
            // <LikeButton addDog={addDog} />
            <DogListButton inDogList={inDogList} clickHandle={clickHandle} />
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
