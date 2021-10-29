import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';
import { postData } from '../../helpers/api-helpers';

function Home() {
  const [state, setState] = useState({data: []});

  // fetching the GET route from the Express server which matches the GET route from server.js
  const getData = async (accessToken, url) => {
    const response = await fetch(url, {
      headers: { 'Authorization': 'Bearer ' + accessToken }})
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  useEffect(() => {
    let grant_type = "client_credentials";
    let client_id = "hsZc8lR0OonlToBVNomWdiUr2noodWHfp3HiKrX4tThWMxJ1cG";
    let client_secret = "cTGO1vj4Bn9Zvz37zg3D8nJ5kyM5JSEhnR0UqO9M";
    let accessToken;
    
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        accessToken = data.access_token;
        getData(accessToken, 'https://api.petfinder.com/v2/types/dog/breeds')
        .then(res => {
          setState({ data: res.breeds })
        })
        .catch(err => console.log(err));
    });
  }, [])

  return (
    <div className="Home">
      <Hero />
      <DogSearchFilter />
      <HomeSeperator title="Breeds" />
      {state.data.map(user => <div>{user.name}</div>)}
      <BreedsCardsList/>
      <HomeSeperator title="Dogs" />
      <DogsCardsList/>
      <MainFooter/>
    </div>
  );
}

export default Home;