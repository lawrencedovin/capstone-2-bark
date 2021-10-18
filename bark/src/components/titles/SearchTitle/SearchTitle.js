import React from 'react';


const SearchTitle = ({title}) => (
  <div data-testid="SearchTitle">
    <div className="container-fluid">
      <div className="row">
        <div className="search col-md-10 mx-auto">
          <h1 className="search__title">
            {title}
          </h1>
          <div className="search__underline"></div>
        </div>
      </div>
    </div>
  </div>
);

export default SearchTitle;
