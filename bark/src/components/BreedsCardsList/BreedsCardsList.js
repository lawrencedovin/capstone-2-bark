import React from 'react';
import LoggedInCardsList from '../LoggedInCardsList/LoggedInCardsList';


function BreedsCardsList() {
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
    <div className="BreedsCardList">
      <LoggedInCardsList props={breeds} type={"breed"}/>
    </div>
  );
}

export default BreedsCardsList;
