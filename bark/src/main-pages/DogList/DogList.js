import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import SearchTitle from '../../components/titles/SearchTitle/SearchTitle';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import LoadingCardsList from '../../components/cards/LoadingCardsList/LoadingCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';
import { postData, getData, grant_type, client_id, client_secret } from '../../helpers/api-helpers';


function DogList() {
  
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  let getDogs = [];

  useEffect(() => {
    let accessToken;
    
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
                                breed: dog.breeds.secondary === null ? dog.breeds.primary : `${dog.breeds.primary} & ${dog.breeds.secondary}`,
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
    });
  }, []);

  return(
    <div data-testid="Search">
      <SearchTitle title="lawrence123's Dog List" />
      <DogSearchFilter />
      {loading ? <LoadingCardsList type={"dogs"} numberOfCards={24}/> : <DogsCardsList dogs={dogs}/>}
      <MainFooter/>
    </div>
  );
}

export default DogList;