import React from 'react';


const HomeSeperator = ({title}) => (
  <div data-testid="HomeSeperator">
    <div className="container-fluid">
      <div className="row">
        <div className="home-seperator col-md-10 mx-auto">
          <h1 className="home-separator__title">
            {title}
          </h1>
          <div className="home-seperator__underline"></div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeSeperator;
