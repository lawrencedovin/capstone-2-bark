import React from 'react';
import BreedSearchFilter from '../../components/filters/BreedSearchFilter/BreedSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';

function BreedList() {
  return(
    <div data-testid="Search">
      <SearchTitle title="lawrence123's Breed List" />
      <BreedSearchFilter />
      <BreedsCardsList/>
      <BreedsCardsList/>
      <BreedsCardsList/>
      <BreedsCardsList/>
      <MainFooter/>
    </div>
  );
}

export default BreedList;
