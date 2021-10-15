import React from 'react';
import LoggedInCardsList from '../LoggedInCardsList/LoggedInCardsList';


function BreedsCardsList() {
  const breeds = [
    {
      title: "Husky",
      imgUrl: "husky-breed",
      btnText: "Check Breed"
    },
    {
      title: "Pug",
      imgUrl: "pug-breed",
      btnText: "Check Breed"
    },
    {
      title: "Yorkshire Terrier",
      imgUrl: "yorkshire-terrier-breed",
      btnText: "Check Breed"
    },
    {
      title: "English Bulldog",
      imgUrl: "english-bulldog-breed",
      btnText: "Check Breed"
    }
  ]
  return (
    <div className="BreedsCardList">
      <LoggedInCardsList props={breeds}/>
    </div>
  );
}

export default BreedsCardsList;
