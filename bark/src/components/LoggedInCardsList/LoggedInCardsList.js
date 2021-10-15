import React from 'react';
import LoggedInCards from '../LoggedInCards/LoggedInCards';

const LoggedInCardsList = ({props, type}) => (

  <div data-testid="LoggedInCardsList">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row justify-content-center text-center">
          {props.map(prop => (
            <div className="col">
                <LoggedInCards 
                  imgUrl={process.env.PUBLIC_URL + 'images/' + type + '/' + prop.imgUrl + '.png'}
                  title={prop.title}
                  description={prop.description}
                  btnText={type === "breeds" ? "Check Breed" : "Check Dog"}
                />
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

LoggedInCardsList.propTypes = {};

LoggedInCardsList.defaultProps = {};

export default LoggedInCardsList;
