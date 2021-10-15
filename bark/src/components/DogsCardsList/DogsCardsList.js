import React from 'react';
import LoggedInCardsList from '../LoggedInCardsList/LoggedInCardsList';


function DogsCardsList() {
  const dogs = [
    {
      title: "George",
      imgUrl: "george-dog",
      description: "Breed: Corgi"

    },
    {
      title: "R2D2",
      imgUrl: "r2d2-dog"
    },
    {
      title: "Spot",
      imgUrl: "spot-dog"
    },
    {
      title: "Winnie",
      imgUrl: "winnie-dog"
    }
  ]
  return (
    <div data-testid="DogsCardsList">
      <LoggedInCardsList props={dogs} type={"dogs"}/>
    </div>
  )
}

export default DogsCardsList;
