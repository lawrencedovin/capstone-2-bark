import React from 'react';
import LikeButton from '../LikeButton/LikeButton';
import UnlikeButton from '../UnlikeButton/UnlikeButton';


function DogListButton({inDogList, clickHandle}) {
  return (
    <>
    {!inDogList
    ?
        <LikeButton addDog={clickHandle} />
    :
        <UnlikeButton removeDog={clickHandle} />
    }
    </>
  )
}

export default DogListButton;
