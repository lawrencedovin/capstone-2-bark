import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import LoadingCardsList from '../../components/cards/LoadingCardsList/LoadingCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState, useContext} from 'react';
import { getBreedsData, getDogsData } from '../../helpers/api-helpers';
import { UserContext } from '../../context/UserContext';

function Home() {
  const {user, setUser} = useContext(UserContext);
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  let getDogs = [];
  let getBreeds = [];
  let breedsURL = 'https://api.petfinder.com/v2/types/dog/breeds';
  let dogsURL = user ? `https://api.petfinder.com/v2/animals?location=${user.zipcode}&type=dog&limit=24` : `https://api.petfinder.com/v2/animals?type=dog&limit=24`;

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