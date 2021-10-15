import React from 'react';

function Cards({imgUrl, title, description, btnText}) {
  let isLoggedIn = false;
  return(
    <div data-testid="Cards">
      <div className="logged-in-card">
        <div className="logged-in-card__img-body-container">
          <img class="card-img-top" src={imgUrl} alt={title} />
          {isLoggedIn
          ?
          <button className="logged-in-card__like d-flex align-items-center justify-content-center">
              <div className="logged-in-card__like-icon img-fluid" alt="like"></div>
          </button>
          :
          <></>
          }
          <div class="card-body logged-in-card__body">
            <h5 class="card-title logged-in-card__title">{title}</h5>
            {description 
            ? 
            <>
              <p class="card-text logged-in-card__description">Breed: {description.breed}</p>
              <p class="card-text logged-in-card__description">Location: {description.location}</p>
            </>
            :
            <></>
            }
          </div>
        </div>
        <a href="/" class="btn logged-in-card__button">{btnText}</a>
      </div>
    </div>
  );
}

export default Cards;
