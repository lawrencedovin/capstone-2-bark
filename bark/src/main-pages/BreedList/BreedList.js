import React from 'react';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';


function BreedList() {
  return(
    <div data-testid="Search">
      <SearchTitle title="lawrence123's Breed List" />
      <DogSearchFilter />
      <BreedsCardsList/>
      <BreedsCardsList/>
      <BreedsCardsList/>
      <BreedsCardsList/>
      <MainFooter/>
    </div>
  );
}

export default BreedList;
