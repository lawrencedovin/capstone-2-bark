import React from 'react';


const LoggedInCards = ({imgUrl, title, description, btnText}) => (
  <div data-testid="LoggedInCards">
    <div class="card logged-in-card">
      <img class="card-img-top" src={imgUrl} alt={title} />
      <div class="card-body logged-in-card__body">
        <h5 class="card-title logged-in-card__title">{title}</h5>
        <p class="card-text logged-in-card__description">{description}</p>
      </div>
    </div>
    <a href="/" class="btn logged-in-card__button">{btnText}</a>
  </div>
);

export default LoggedInCards;
