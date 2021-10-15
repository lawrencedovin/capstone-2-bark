import React from 'react';
import LoggedInCards from '../LoggedInCards/LoggedInCards';


const LoggedInCardsList = () => (
  <div data-testid="LoggedInCardsList">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row justify-content-center text-center">
            <div className="col">
              <LoggedInCards 
                imgUrl={process.env.PUBLIC_URL + 'images/breeds/husky-breed.png'}
                title={"Husky"}
                btnText={"Check Breed"}
              />
            </div> 
            <div className="col">
              <LoggedInCards 
                imgUrl={process.env.PUBLIC_URL + 'images/breeds/pug-breed.png'}
                title={"Pug"}
                btnText={"Check Breed"}
              />
            </div>
            <div className="col">
              <LoggedInCards 
                imgUrl={process.env.PUBLIC_URL + 'images/breeds/yorkshire-terrier-breed.png'}
                title={"Yorkshire Terrier"}
                btnText={"Check Breed"}
              />
            </div>
            <div className="col">
              <LoggedInCards 
                imgUrl={process.env.PUBLIC_URL + 'images/breeds/english-bulldog-breed.png'}
                title={"English Bulldog"}
                btnText={"Check Breed"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LoggedInCardsList.propTypes = {};

LoggedInCardsList.defaultProps = {};

export default LoggedInCardsList;
