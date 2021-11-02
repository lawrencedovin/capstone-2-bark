import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getDogData } from '../../helpers/api-helpers';
import MainFooter from '../../components/footers/MainFooter/MainFooter';

function DogDetails() {
  const { id } = useParams();
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  let dogURL = `https://api.petfinder.com/v2/animals/53181476`;

  useEffect(() => {
    getDogData(dogURL, setDog, setLoading);
  }, []);

  return(
    <div data-testid="DogDetails">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 mx-auto details">
              <div className="details__title-icon-container">
                <button className="details__like">
                  <div className="details__like-icon" alt="like"></div>
                </button>
                <h1 className="details__title">{dog.title}</h1>
              </div>
            <div className="row">
              <div className="col details__image-container">
                  <img src={process.env.PUBLIC_URL + dog.photos.imgUrl1} className="details__image img-fluid" alt="walter-1"/>
              </div>
              <div className="col details__image-container">
                  <img src={process.env.PUBLIC_URL + dog.photos.imgUrl2} className="details__image img-fluid" alt="walter-2"/>
              </div>
              <div className="col details__image-container">
                  <img src={process.env.PUBLIC_URL + dog.photos.imgUrl3} className="details__image img-fluid" alt="water-3"/>
              </div>
            </div>
            <div className="row">
              <p><span><a href="/" className="details__section-link">{dog.breed}</a></span> - {dog.location}</p>
              <p>{dog.age} - {dog.gender} - {dog.size}</p>
            </div>
            <div className="row details__section">
              <div className="details__section-title">About</div>
                <ul className="details__section-description list-unstyled">
                  <li><span className="details__section-description--black">House-Trained: </span>{dog.about.houseTrained}</li>
                  <li><span className="details__section-description--black">Health: </span>{dog.about.health}</li>
                  <li><span className="details__section-description--black">Good In A Home With: </span>{dog.about.goodWith}</li>
                  <li><span className="details__section-description--black">Prefers a Home Without: </span>{dog.about.notGoodWith}</li>
                </ul>
            </div>
            <div className="row details__section">
              <div className="details__section-title">Meet {dog.title}</div>
              <div className="details__section-description">
                <p>{dog.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  )
}

export default DogDetails;
