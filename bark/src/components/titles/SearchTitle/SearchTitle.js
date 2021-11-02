import React from 'react';
import { titleCase } from '../../../helpers/general-helpers';


const SearchTitle = ({title}) => (
  <div data-testid="SearchTitle">
    <div className="container-fluid">
      <div className="row">
        <div className="search col-md-10 mx-auto">
          <h1 className="search__title">
            {titleCase(title)}
          </h1>
          <div className="search__underline"></div>
        </div>
      </div>
    </div>
  </div>
);

export default SearchTitle;
