import React from 'react';
import CardsList from '../CardsList/CardsList';


function LoadingCardsList({type}) {
  
  const loading = [
    {
      title: "Loading",
      imgUrl: "husky-breed"
    },
    {
      title: "Loading",
      imgUrl: "husky-breed"
    },
    {
      title: "Loading",
      imgUrl: "husky-breed"
    },
    {
      title: "Loading",
      imgUrl: "husky-breed"
    }
  ]
  return (
    <div className="BreedsCardList">
      <CardsList props={loading} type={type}/>
    </div>
  );
  }

export default LoadingCardsList;
