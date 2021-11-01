import React from 'react';
import CardsList from '../CardsList/CardsList';


function LoadingCardsList({type, numberOfCards}) {

  const loading = []

  for(let i = 0; i < numberOfCards; i++) {
    if(type === "dogs"){
      loading.push(
        {
          title: "Loading...",
          imgUrl: `/${process.env.PUBLIC_URL}icons/loading-icon.svg`,
          description: {
                        breed: '?',
                        location: '?', 
                        status: '?'
          }
        }
      )
    }
    else {
      loading.push(
        {
          title: "Loading...",
          imgUrl: `/${process.env.PUBLIC_URL}icons/loading-icon.svg`
        }
      )
    }
  }

  return (
    <div className="BreedsCardList">
      <CardsList props={loading} type={type}/>
    </div>
  );
  }

export default LoadingCardsList;
