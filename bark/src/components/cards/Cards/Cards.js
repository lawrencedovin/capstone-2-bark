import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

function Cards({dogId, imgUrl, title, description, btnText, link, status, statusClass}) {

  const {user, setUser} = useContext(UserContext);

  const addDog = () => {
    const user_id = user.id;
    const dog_id = dogId;
    alert(`user_id: ${user_id}, dog_id: ${dog_id}`);
    // const dog_id = 
    // const { user_id, email, zipcode, password } = formData;
    // postData('/users', { username, email, zipcode, password })
    // .then(data => {
    //   setAlertData(alertData => ({...alertData, 'visible': true}));
    //   countdown(resetShowAlert);
    //   if(data.hasOwnProperty('user')) {
    //     setAlertData(alertData => ({...alertData, 'content': `${data.user.username} successfully created account!`}));
    //     setUser(data.user);
    //   }
    //   else {
    //     setAlertData(alertData => ({...alertData, 'type': 'error', 'content': `${data.error.message}`}));
    //   }
    // });
    
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
          <button className="logged-in-card__like d-flex align-items-center justify-content-center" onClick={addDog}>
              <div className="logged-in-card__like-icon img-fluid" alt="like"></div>
          </button>
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
