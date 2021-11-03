import React from 'react';
import Cards from '../Cards/Cards';

const CardsList = ({props, type}) => (

  <div data-testid="CardsList">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row justify-content-center text-center">
          {props.map(prop => (
            <div className="col-md-3">
                <Cards 
                  // imgUrl={process.env.PUBLIC_URL + 'images/' + type + '/' + prop.imgUrl + '.png'}
                  imgUrl={prop.imgUrl}
                  title={prop.title}
                  description={prop.description}
                  btnText={type === "breeds" ? "Check Breed" : "Check Dog"}
                  link={type === "breeds" ? "/breed-details" : `/dog/${prop.id}`}
                  status={prop.status}
                  statusClass={prop.statusClass}
                />
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

CardsList.propTypes = {};

CardsList.defaultProps = {};

export default CardsList;
