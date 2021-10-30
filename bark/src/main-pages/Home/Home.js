import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';
import { postData, getData, grant_type, client_id, client_secret } from '../../helpers/api-helpers';

function Home() {
  const [state, setState] = useState({dogs: []});

  
  const dogs = [
    {
      title: "George",
      imgUrl: "george-dog",
      description: {breed: "German Shepherd",
                    location: "Bowie, MD"}

    },
    {
      title: "R2D2",
      imgUrl: "r2d2-dog",
      description: {breed: "Corgi",
                    location: "Bowie, MD"}
    },
    {
      title: "Spot",
      imgUrl: "spot-dog",
      description: {breed: "Dalmatian",
                    location: "Bowie, MD"}
    },
    {
      title: "Winnie",
      imgUrl: "winnie-dog",
      description: {breed: "Chow Chow",
                    location: "Bowie, MD"}
    }
  ]

  // useEffect(() => {
  //   let accessToken;
    
  //   postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
  //     .then(data => {
  //       accessToken = data.access_token;
  //       getData(accessToken, 'https://api.petfinder.com/v2/types/dog/breeds')
  //       .then(res => {
  //         setState({ data: res.breeds })
  //       })
  //       .catch(err => console.log(err));
  //   });
  // }, [])

  useEffect(() => {
    let accessToken;
    
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        accessToken = data.access_token;
        getData(accessToken, 'https://api.petfinder.com/v2/animals?location=20720&type=dog&breed=Pug&limit=3')
        .then(res => {
          // setState({dogs: res.animals.map(dog => dog.name)})
          // setState({dogs: res.animals.map(dog => dog.name)})
          setState(state.dogs.push({'id':5, 'title': 'R2D2'}));
          setState(state.dogs.push({'id':4, 'title': 'pancake'}));
          // console.log()
          // alert(JSON.stringify(res.animals));
          alert(JSON.stringify(state.dogs));
        })
        .catch(err => console.log(err));
    });
  }, []);

  return (
    <div className="Home">
      <Hero />
      <DogSearchFilter />
      <HomeSeperator title="Breeds" />
      <div>{JSON.stringify(state.dogs)}</div>
      {/* {state.data.map(user => <div>{user.name}</div>)} */}
      {
      // state.dogs.map(dog => 
      // <ul>
      //   <li>ID: {dog.id}</li>
      //   <li>NAME: {dog.name}</li>
      //   {/* <li><img src={dog.photos.medium} alt={dog.name} /></li> */}
      //   {dog.primary_photo_cropped.medium
      //   ? 
      //   <li>
      //     {/* {dog.primary_photo_cropped.medium.replace('\/', '/')} */}
      //     <img src={dog.primary_photo_cropped.medium} alt={dog.name} />
      //   </li>
      //   :
      //   <li></li>}
        
      //   <li>Status URL: {dog.status}</li>
      //   <li>Location: {dog.contact.address.city}, {dog.contact.address.state}</li>
      // </ul>
      // )
      }
      
      <BreedsCardsList/>
      <HomeSeperator title="Dogs" />
      {/* <DogsCardsList dogs={dogs}/> */}
      <DogsCardsList dogs={dogs}/>
      <MainFooter/>
    </div>
  );
}

export default Home;