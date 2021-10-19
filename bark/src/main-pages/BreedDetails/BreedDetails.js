import React from 'react';


const BreedDetails = () => (
  <div data-testid="BreedDetails">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 mx-auto">
          <div className="row justify-content-center text-center">
            <div className="details">
              <div className="details__title-icon-container">
                <button className="details__like d-flex align-items-center justify-content-center">
                  <div className="details__like-icon img-fluid" alt="like"></div>
                </button>
                <h1 className="details__title">Akita</h1>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + 'images/akita.jpg'} className="details__image img-fluid" alt="akita"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BreedDetails;
