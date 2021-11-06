import React from 'react';


function UnlikeButton({removeDog}) {
  return (
    <button className="logged-in-card__unlike d-flex align-items-center justify-content-center" onClick={removeDog}>
      <div className="logged-in-card__unlike-icon img-fluid" alt="unlike"></div>
    </button>
  )
}

export default UnlikeButton;
