import React from 'react';
import LoggedInCardsList from '../LoggedInCardsList/LoggedInCardsList';


function DogsCardsList() {
  const dogs = [
    {
      title: "George",
      imgUrl: "george-dog",
      description: {breed: "German Shepherd",
                    location: "Bowie, MD"}

    },
    {
      title: "R2D2",
      imgUrl: "r2d2-dog",
      description: {breed: "Corgi",
                    location: "Bowie, MD"}
    },
    {
      title: "Spot",
      imgUrl: "spot-dog",
      description: {breed: "Dalmatian",
                    location: "Bowie, MD"}
    },
    {
      title: "Winnie",
      imgUrl: "winnie-dog",
      description: {breed: "Chow Chow",
                    location: "Bowie, MD"}
    }
  ]
  return (
    <div data-testid="DogsCardsList">
      <LoggedInCardsList props={dogs} type={"dogs"}/>
    </div>
  )
}

export default DogsCardsList;
