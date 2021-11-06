import React from 'react';


function LikeButton({addDog}) {
  return (
    <button className="logged-in-card__like d-flex align-items-center justify-content-center" onClick={addDog}>
      <div className="logged-in-card__like-icon img-fluid" alt="like"></div>
    </button>
  )
}

export default LikeButton;
