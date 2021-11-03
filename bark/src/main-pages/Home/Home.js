import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import LoadingCardsList from '../../components/cards/LoadingCardsList/LoadingCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';
import { postData, getData, grant_type, client_id, client_secret } from '../../helpers/api-helpers';
import { titleCase } from '../../helpers/general-helpers';

function Home() {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  let getDogs = [];
  let getBreeds = [];

  useEffect(() => {
    let accessToken;

    
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        accessToken = data.access_token;
        getData(accessToken, 'https://api.petfinder.com/v2/types/dog/breeds')
        .then(res => {
          res.breeds.map(breed => {
            return getBreeds.push(breed.name);
          })
          getBreeds.unshift("All Breeds");
          setBreeds(getBreeds);
        })
        .catch(err => console.log(err));
    });
    
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        accessToken = data.access_token;
        getData(accessToken, 'https://api.petfinder.com/v2/animals?location=20720&type=dog&breed=Pug&limit=24')
        .then(res => {
          res.animals.map(dog => {
            return getDogs.push(
                { id: dog.id, 
                  title: dog.name,
                  status: titleCase(dog.status),
                  statusClass: titleCase(dog.status) === 'Adoptable' ? 'details__status--adoptable' : 'details__status--adopted',
                  imgUrl: dog.primary_photo_cropped === null ? `${process.env.PUBLIC_URL}icons/placeholder-icon.svg` : dog.primary_photo_cropped.medium,
                  description: {
                                breed: dog.breeds.secondary === null ? dog.breeds.primary : `${dog.breeds.primary} & ${dog.breeds.secondary}`,
                                location: `${dog.contact.address.city},  ${dog.contact.address.state}`, 
                                status: dog.status
                              }
                }
              );
          })
          setDogs(getDogs);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    })

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