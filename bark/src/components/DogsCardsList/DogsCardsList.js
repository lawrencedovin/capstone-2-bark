import React from 'react';
import LoggedInCardsList from '../LoggedInCardsList/LoggedInCardsList';


function DogsCardsList() {
  const breeds = [
    {
      title: "Husky",
      imgUrl: "husky-breed"
    },
    {
      title: "Pug",
      imgUrl: "pug-breed"
    },
    {
      title: "Yorkshire Terrier",
      imgUrl: "yorkshire-terrier-breed"
    },
    {
      title: "English Bulldog",
      imgUrl: "english-bulldog-breed"
    }
  ]
  return (
    <div data-testid="DogsCardsList">
      <LoggedInCardsList props={breeds} type={"dog"}/>
    </div>
  )
}

export default DogsCardsList;
