import React from 'react';
import {Link} from 'react-router-dom';

function Cards({imgUrl, title, description, btnText, link}) {
  let isLoggedIn = true;
  return(
    <div data-testid="Cards">
      <div className="logged-in-card">
        <div className="logged-in-card__img-body-container">
          <div className="logged-in-card__img-container">
            <img className="logged-in-card__img" src={imgUrl} alt={title} />
          </div>
          {isLoggedIn
          ?
          <button className="logged-in-card__like d-flex align-items-center justify-content-center">
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
            </div>
            :
            <></>
            }
          </div>
        </div>
        <Link to={link} className="btn logged-in-card__button">{btnText}</Link>
        {/* <a href={link} className="btn logged-in-card__button">{btnText}</a> */}
      </div>
    </div>
  );
}

export default Cards;
