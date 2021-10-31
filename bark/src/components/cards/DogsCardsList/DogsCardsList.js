import React from 'react';
import CardsList from '../CardsList/CardsList';


function DogsCardsList({dogs}) {
  return (
    <div data-testid="DogsCardsList">
      <CardsList props={dogs} type={"dogs"}/>
    </div>
  )
}

export default DogsCardsList;
