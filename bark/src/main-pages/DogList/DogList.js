import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import LoadingCardsList from '../../components/cards/LoadingCardsList/LoadingCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState, useContext} from 'react';
import { getBreedsData, getDogsData } from '../../helpers/api-helpers';
import { UserContext } from '../../context/UserContext';


function DogList() {
  
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  let getDogs = [];
  let getBreeds = [];
  let zipcode = 20720;
  let breedsURL = 'https://api.petfinder.com/v2/types/dog/breeds';
  let dogsURL = `https://api.petfinder.com/v2/animals?location=${zipcode}&type=dog&limit=24`;

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getBreedsData(breedsURL, getBreeds, setBreeds)
    getDogsData(dogsURL, getDogs, setDogs, setLoading)
  }, []);

  return(
    <div data-testid="Search">
      <SearchTitle title={`${user.username}'s Dog List`} />
      <DogSearchFilter breeds={breeds}/>
      {loading ? <LoadingCardsList type={"dogs"} numberOfCards={24}/> : <DogsCardsList dogs={dogs}/>}
      <MainFooter/>
    </div>
  );
}

export default DogList;