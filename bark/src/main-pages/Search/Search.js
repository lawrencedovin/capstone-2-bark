import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { getBreedsData, getDogsData } from '../../helpers/api-helpers';
import LoadingCardsList from '../../components/cards/LoadingCardsList/LoadingCardsList';


function Search() {

  const { breed, zipcode } = useParams();
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  let getDogs = [];
  let getBreeds = [];
  let breedsURL = 'https://api.petfinder.com/v2/types/dog/breeds';
  let dogsURL = breed === 'all breeds' 
                          ? `https://api.petfinder.com/v2/animals?location=${zipcode}&type=dog&limit=24`
                          : `https://api.petfinder.com/v2/animals?location=${zipcode}&type=dog&breed=${breed}&limit=24`;

  useEffect(() => {
    getBreedsData(breedsURL, getBreeds, setBreeds)
    getDogsData(dogsURL, getDogs, setDogs, setLoading)
  }, []);

  return(
    <div data-testid="Search">
      <SearchTitle title={`${breed} in ${zipcode}`} />
      <DogSearchFilter breeds={breeds}/>
      {loading ? <LoadingCardsList type={"dogs"} numberOfCards={24}/> : <DogsCardsList dogs={dogs}/>}
      <MainFooter/>
    </div>
  );
}

export default Search;
