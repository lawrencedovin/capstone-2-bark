import React from 'react';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';


function Search() {
  return(
    <div data-testid="Search">
      <SearchTitle title="Dogs" />
      <DogSearchFilter />
      <DogsCardsList/>
      <MainFooter/>
    </div>
  );
}

export default Search;
