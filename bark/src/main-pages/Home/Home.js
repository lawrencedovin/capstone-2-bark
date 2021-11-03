import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import LoadingCardsList from '../../components/cards/LoadingCardsList/LoadingCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';
import { getBreedsData, getDogsData } from '../../helpers/api-helpers';

function Home() {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  let getDogs = [];
  let getBreeds = [];
  let zipcode = 20720;
  let breedsURL = 'https://api.petfinder.com/v2/types/dog/breeds';
  let dogsURL = `https://api.petfinder.com/v2/animals?location=${zipcode}&type=dog&limit=24`;

  useEffect(() => {
    getBreedsData(breedsURL, getBreeds, setBreeds)
    getDogsData(dogsURL, getDogs, setDogs, setLoading)
  }, []);

  return (
    <div className="Home">
      <Hero />
      <DogSearchFilter breeds={breeds}/>
      {/* <HomeSeperator title="Breeds" />
      {loading ? <LoadingCardsList type={"breeds"} numberOfCards={4}/> : <BreedsCardsList dogs={dogs}/>} */}
      {/* {breeds.map((breed) => <ul><li>{breed}</li></ul>)} */}
      <HomeSeperator title="Dogs" />
      {loading ? <LoadingCardsList type={"dogs"} numberOfCards={24}/> : <DogsCardsList dogs={dogs}/>}
      <MainFooter/>
    </div>
  );
}

export default Home;