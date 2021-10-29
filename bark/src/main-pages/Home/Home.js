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

  let yourAccessTokenHere = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoc1pjOGxSME9vbmxUb0JWTm9tV2RpVXIybm9vZFdIZnAzSGlLclg0dFRoV014SjFjRyIsImp0aSI6IjJmY2I1MGJkMjhhNWM2Y2JmZjVmM2U1MmQ5MmVlNGU1NGRkNmY2NDAyYzNjYTMwYTE1MWEzMmEyZWE3YzEwNDhlMWI2ZWE5MTkwOTM4ZDI2IiwiaWF0IjoxNjM1NTE1MTAzLCJuYmYiOjE2MzU1MTUxMDMsImV4cCI6MTYzNTUxODcwMywic3ViIjoiIiwic2NvcGVzIjpbXX0.HUvz_RrfEaORcBM8U4yCDqQulb4BC6kZZpe1DLNtJxShW8Gyl-3x-5MrdcROl3EC3NHQ6GwxUNOHym_Gz_woJvU40mABD3_fYSWOwOz2zP2ZhuhQHqooHGVg6ZTP_k1BIU8sbZa6vBu4mw0y6pGmC-kwcKLQKv7jzI_mf0eqtakFV-ufu3lhE_qeGCILtOoc0vAqsvOZ2JKEwcf_X6gRrGDy4EHHU_5KEwenZ03BCg4qvkJL01OyJu0ohktDnBp_lbL-1HqDExCIImoufnpifO0beTUyd_vnDewt26LBtbAaLKLeLHyvDuhgdt44AK7BUX8f4jVflSysU0Qg9uAzJQ";

  // fetching the GET route from the Express server which matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch('https://api.petfinder.com/v2/types/dog/breeds', {
      headers: { 'Authorization': 'Bearer ' + yourAccessTokenHere }})
    const body = await response.json();
    // console.log(response, body);

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  useEffect(() => {
    console.log('component useEffect');
    let grant_type = "client_credentials";
    let client_id = "hsZc8lR0OonlToBVNomWdiUr2noodWHfp3HiKrX4tThWMxJ1cG";
    let client_secret = "cTGO1vj4Bn9Zvz37zg3D8nJ5kyM5JSEhnR0UqO9M";
    
      postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        alert(JSON.stringify(data.access_token));
    });

    callBackendAPI()
      .then(res => setState({ data: res.breeds }))
      .catch(err => console.log(err));
  }, [])


  // componentDidMount();

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