import React from 'react';


const SearchTitle = ({title}) => (
  <div data-testid="SearchTitle">
    <div className="container-fluid">
      <div className="row">
        <div className="home-seperator col-md-10 mx-auto">
          <h1 className="home-seperator__title">
            {title}
          </h1>
          <div className="home-seperator__underline"></div>
        </div>
      </div>
    </div>
  </div>
);

export default SearchTitle;
