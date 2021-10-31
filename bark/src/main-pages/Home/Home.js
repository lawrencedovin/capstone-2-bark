import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';
import { postData, getData, grant_type, client_id, client_secret } from '../../helpers/api-helpers';

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  let getDogs = [];

  useEffect(() => {
    let accessToken;
    
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        accessToken = data.access_token;
        // getData(accessToken, 'https://api.petfinder.com/v2/animals?location=20720&type=dog&breed=Pug&limit=4')
        getData(accessToken, 'https://api.petfinder.com/v2/animals?location=20720&type=dog&limit=4')
        .then(res => {
          res.animals.map(dog => {
            return getDogs.push(
                { id: dog.id, 
                  title: dog.name,
                  imgUrl: dog.primary_photo_cropped.medium || null,
                  description: {
                                breed: "Chow Chow", 
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

  

  return (
    <div className="Home">
      <Hero />
      <DogSearchFilter />
      <HomeSeperator title="Breeds" />
      <BreedsCardsList/>
      <HomeSeperator title="Dogs" />
      <DogsCardsList dogs={dogs}/>
      <MainFooter/>
    </div>
  );
}

export default Home;