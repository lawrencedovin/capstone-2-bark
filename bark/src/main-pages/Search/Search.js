import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { postData, getData, grant_type, client_id, client_secret } from '../../helpers/api-helpers';
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
    let accessToken;

    
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        accessToken = data.access_token;
        getData(accessToken, breedsURL)
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
        getData(accessToken, dogsURL)
        .then(res => {
          res.animals.map(dog => {
            return getDogs.push(
                { id: dog.id, 
                  title: dog.name,
                  imgUrl: dog.primary_photo_cropped === null ? `/${process.env.PUBLIC_URL}icons/placeholder-icon.svg` : dog.primary_photo_cropped.medium,
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
