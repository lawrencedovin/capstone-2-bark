import React from 'react';
import CardsList from '../CardsList/CardsList';


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
      <CardsList props={breeds} type={"breeds"}/>
    </div>
  );
}

export default BreedsCardsList;
