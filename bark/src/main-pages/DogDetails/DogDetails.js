import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getDogData } from '../../helpers/api-helpers';
import MainFooter from '../../components/footers/MainFooter/MainFooter';

function DogDetails() {
  const { id } = useParams();
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  // let getDog = [];
  // let dogURL = `https://api.petfinder.com/v2/animals/${id}`;
  let dogURL = `https://api.petfinder.com/v2/animals/53181476`;

  useEffect(() => {
    getDogData(dogURL, setDog, setLoading);
    // alert(JSON.stringify(dog))
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
                <h1 className="details__title">Walter</h1>
              </div>
            <div className="row">
              <div className="col details__image-container">
                  <img src={process.env.PUBLIC_URL + 'images/walter-1.jpg'} className="details__image img-fluid" alt="walter-1"/>
              </div>
              <div className="col details__image-container">
                  <img src={process.env.PUBLIC_URL + 'images/walter-2.jpg'} className="details__image img-fluid" alt="walter-2"/>
              </div>
              <div className="col details__image-container">
                  <img src={process.env.PUBLIC_URL + 'images/walter-3.jpg'} className="details__image img-fluid" alt="water-3"/>
              </div>
            </div>
            <div className="row">
              <p><span><a href="/" className="details__section-link">Siberian Husky</a></span> - Millersville, MD</p>
              <p>Adult - Male - Large</p>
            </div>
            <div className="row details__section">
              <div className="details__section-title">About</div>
                <ul className="details__section-description list-unstyled">
                  <li><span className="details__section-description--black">House-Trained: </span>Yes</li>
                  <li><span className="details__section-description--black">Health: </span>Vaccinations up to date, spayed / neutered</li>
                  <li><span className="details__section-description--black">Good In A Home With: </span>Other dogs, children.</li>
                  <li><span className="details__section-description--black">Prefers a Home Without: </span>Cats</li>
                </ul>
            </div>
            <div className="row details__section">
              <div className="details__section-title">Meet Walter</div>
              <div className="details__section-description">
                <p>www.huskyrescueteam.org</p>
                <p>
                  If you have additional questions please email info@huskyrescueteam.org
                  Walter is a 3 year old Husky who was surrendered to a kill shelter in Georgia when his owner had to move in with extended family.
                  The shelter is so full and completely out of room! We went to meet Walter yesterday and quickly fell in love! This big, fluffy fella is amazing and we are glad to have rescued him!
                </p>
                <p>
                  He's settling in to his foster home and so far proving to be an easy, wonderful Sibe with one stellar personality! Walter adores other dogs and loves to play with them. He'd like a playful companion in his forever home. He's also good with children but hasn't been cat or small dog tested.
                  He'd love a fenced yard and likes to swim too! He's great in the car and enjoys outings. He's a pretty quiet fella and we haven't heard him sing yet. He's housebroken and not destructive, although he's not been left for long periods of time.
                </p>
                <p>
                  Walter would do well in just about any environment, but because he's so wonderful - we're going to make sure he goes to a wonderful home who can give him the Husky wishlist! It's rare we get a dog into our program who has been so well cared for. Walter is neutered, current on his vaccines and healthy. Walter is being fostered in NC but his adoption area is NJ to GA as we can transport.
                </p>
                <p>
                    If you wish to add our 60lb big teddy bear to your pack, you can apply on our website.
                  ~~Husky Education And Rescue Team is a foster based rescue. Our dogs are in our foster homes all up and down the east coast. We do not have a facility in which you can visit. We find this a huge benefit because we learn our dogs and are able to educate our adopters on what it's like to have them live in your home. Part of our process, once pre-approved, is to speak with the foster for the dog you're interested in. If you're still interested in adopting from our rescue the first step is to complete our adoption application online at www.huskyrescueteam.org/apply
                </p>
                <p>If you have additional questions please email info@huskyrescueteam.org</p>
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
