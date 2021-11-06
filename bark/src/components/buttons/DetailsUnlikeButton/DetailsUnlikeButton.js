import React from 'react';


function DetailsUnlikeButton({removeDog}) {
  return (
    <button className="details__unlike"  onClick={removeDog}>
      <div className="details__unlike-icon" alt="unlike"></div>
    </button>
  )
}

export default DetailsUnlikeButton;
