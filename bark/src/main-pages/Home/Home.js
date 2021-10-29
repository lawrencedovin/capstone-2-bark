import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';

function Home() {
  const [state, setState] = useState({data: []});

  let yourAccessTokenHere = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoc1pjOGxSME9vbmxUb0JWTm9tV2RpVXIybm9vZFdIZnAzSGlLclg0dFRoV014SjFjRyIsImp0aSI6ImE5YzZhMDdmMzA4ZjJlZTI0Zjc4ZWE3ZDM5MjE2OTc3MDA5YmRjZjVjZGZjMzNhYzczNTM2MzEzZDkwN2FlYzQyZGM0YjI3ZWM5MGM3YzMwIiwiaWF0IjoxNjM1NTExMDQ3LCJuYmYiOjE2MzU1MTEwNDcsImV4cCI6MTYzNTUxNDY0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.Sh5KRg7B2jof0HAQVNjE13yPd7SWtqUNS1Zbqx1K4o3e3Z5bhUSDJhnbAxkCkd5EFbCsRDo0o3UrRcHxsOzM-_bvdtsFK0jh8fCOEvtOJzZTl8f5TkS12v0PlkPpGhlH2R1uzxp6KvZPrxwKovl1VQB07hFILqGCqrU6pHOQ8LvSgrrSgtY7aVfKJuxN9IX5Ss9TLig4wP88efQYdPGpzFGxK0RCxDmBcjB3d0Ckl-tmeNLo0uwURoOJ2MkwgfZxcIOZSvtpqST1--mwbwG8DP7swbULSNtSpH11RqBmrPdJFSWkR7pXLZALiNUX_U0D1rhvs6dfKwd4HISO7raFIQ";

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