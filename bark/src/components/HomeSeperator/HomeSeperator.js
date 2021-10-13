import React from 'react';


const HomeSeperator = ({title}) => (
  <div data-testid="HomeSeperator">
    <div className="home-seperator">
      <h1 className="home-separator__title">
        {title}
      </h1>
      <div className="home-seperator__underline"></div>
    </div>
  </div>
);

export default HomeSeperator;
