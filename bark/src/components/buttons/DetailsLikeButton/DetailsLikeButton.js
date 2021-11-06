import React from 'react';


function DetailsLikeButton({addDog}) {
  return (
    <button className="details__like"  onClick={addDog}>
      <div className="details__like-icon" alt="like"></div>
    </button>
  )
}

export default DetailsLikeButton;
