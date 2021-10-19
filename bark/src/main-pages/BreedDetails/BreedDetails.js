import React from 'react';


const BreedDetails = () => (
  <div data-testid="BreedDetails">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 mx-auto details">
            <div className="details__title-icon-container">
              <button className="details__like">
                <div className="details__like-icon" alt="like"></div>
              </button>
              <h1 className="details__title">Akita</h1>
            </div>
          <div className="row">
            <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + 'images/akita.jpg'} className="details__image img-fluid" alt="akita"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BreedDetails;
