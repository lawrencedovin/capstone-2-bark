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
          setBreeds(getBreeds);
        })
        .catch(err => console.log(err));
    });
    
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        accessToken = data.access_token;
        getData(accessToken, 'https://api.petfinder.com/v2/animals?location=20720&type=dog&limit=24')
        .then(res => {
          res.animals.map(dog => {
            return getDogs.push(
                { id: dog.id, 
                  title: dog.name,
                  imgUrl: dog.primary_photo_cropped === null ? `${process.env.PUBLIC_URL}icons/placeholder-icon.svg` : dog.primary_photo_cropped.medium,
                  description: {
                                breed: `${dog.breeds.primary} & ${dog.breeds.secondary}` || dog.breeds.primary,
                                location: `${dog.contact.address.city}  ${dog.contact.address.state}`, 
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
