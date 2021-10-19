import React from 'react';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';


function DogList() {
  return(
    <div data-testid="Search">
      <SearchTitle title="lawrence123's Dog List" />
      <DogSearchFilter />
      <DogsCardsList/>
      <DogsCardsList/>
      <DogsCardsList/>
      <DogsCardsList/>
      <MainFooter/>
    </div>
  );
}

export default DogList;
