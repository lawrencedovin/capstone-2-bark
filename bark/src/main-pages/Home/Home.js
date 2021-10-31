import Hero from '../../components/Hero/Hero';
import DogSearchFilter from '../../components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from '../../components/titles/HomeSeperator/HomeSeperator';
import BreedsCardsList from '../../components/cards/BreedsCardsList/BreedsCardsList';
import DogsCardsList from '../../components/cards/DogsCardsList/DogsCardsList';
import MainFooter from '../../components/footers/MainFooter/MainFooter';
import React, {useEffect, useState} from 'react';
import { postData, getData, grant_type, client_id, client_secret } from '../../helpers/api-helpers';

function Home() {
  // const [state, setState] = useState({dogs: []});
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  let doggies = [];

  
  const dogs = [
    {
      id: 1,
      title: "George",
      imgUrl: "george-dog",
      description: {breed: "German Shepherd",
                    location: "Bowie, MD",
                    status: "adoptable"}

    },
    {
      id: 2,
      title: "R2D2",
      imgUrl: "r2d2-dog",
      description: {breed: "Corgi",
                    location: "Bowie, MD",
                    status: "adoptable"}
    },
    {
      id: 3,
      title: "Spot",
      imgUrl: "spot-dog",
      description: {breed: "Dalmatian",
                    location: "Bowie, MD",
                    status: "adoptable"}
    },
    {
      id: 4,
      title: "Winnie",
      imgUrl: "winnie-dog",
      description: {breed: "Chow Chow",
                    location: "Bowie, MD",
                    status: "adoptable"}
    }
  ]

  // const dogs =  [{"id":53425494,"title":"Tyson","imgUrl":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53425494/1/?bust=1635696068&width=450","description":{"breed":"Chow Chow","location":"Washington  DC","status":"adoptable"}},{"id":53385410,"title":"Tony","imgUrl":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53385410/1/?bust=1635611482&width=450","description":{"breed":"Chow Chow","location":"Alexandria  VA","status":"adoptable"}},{"id":53377449,"title":"DA 8 &#34;Gizmo&#34;","imgUrl":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53377449/1/?bust=1635551181&width=450","description":{"breed":"Chow Chow","location":"Glen Allen  VA","status":"adoptable"}}]

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

          // res.animals.map(dog => {
          //   return setState(state.dogs.push(
          //       { id: dog.id, 
          //         title: dog.name,
          //         imgUrl: dog.primary_photo_cropped.medium || null,
          //         description: {
          //                       breed: "Chow Chow", 
          //                       location: `${dog.contact.address.city}  ${dog.contact.address.state}`, 
          //                       status: dog.status
          //                     }
          //       }
          //     ));
          // })

          res.animals.map(dog => {
            return doggies.push(
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
          setState(doggies);
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
      <DogsCardsList dogs={state}/>
      <MainFooter/>
    </div>
  );
}

export default Home;