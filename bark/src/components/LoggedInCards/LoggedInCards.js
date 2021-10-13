import React from 'react';


const LoggedInCards = ({imgUrl, title, description}) => (
  <div data-testid="LoggedInCards">
    <div class="card" style={{width: "18rem"}}>
      <img class="card-img-top" src={imgUrl} alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href="/" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
);

export default LoggedInCards;
