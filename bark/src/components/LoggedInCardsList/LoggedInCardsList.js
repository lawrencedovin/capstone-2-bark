import React from 'react';
import LoggedInCards from '../LoggedInCards/LoggedInCards';


const LoggedInCardsList = () => (
  <div data-testid="LoggedInCardsList">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <LoggedInCards 
            imgUrl={process.env.PUBLIC_URL + 'images/breeds/husky-breed.png'}
          />
        </div>
      </div>
    </div>
  </div>
);

LoggedInCardsList.propTypes = {};

LoggedInCardsList.defaultProps = {};

export default LoggedInCardsList;
