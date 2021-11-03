import {titleCase, pushToGoodOrNotGoodWith, splitArrayWithComma} from './general-helpers';
export let grant_type = "client_credentials";
export let client_id = "hsZc8lR0OonlToBVNomWdiUr2noodWHfp3HiKrX4tThWMxJ1cG";
export let client_secret = "cTGO1vj4Bn9Zvz37zg3D8nJ5kyM5JSEhnR0UqO9M";

// Example POST method implementation:
export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  
  // fetching the GET route from the Express server which matches the GET route from server.js
export async function getData(accessToken, url) {
    const response = await fetch(url, {
      headers: { 'Authorization': 'Bearer ' + accessToken }})
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  export async function getBreedsData(breedsURL, getBreeds, setBreeds) {
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        let accessToken = data.access_token;
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
  }

  export async function getDogsData(dogsURL, getDogs, setDogs, setLoading) {
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        let accessToken = data.access_token;
        getData(accessToken, dogsURL)
        .then(res => {
          res.animals.map(dog => {
            return getDogs.push(
                { id: dog.id, 
                  title: dog.name,
                  status: titleCase(dog.status) === 'Adoptable' ? titleCase(dog.status) : titleCase(dog.status) + ' 🎉',
                  statusClass: titleCase(dog.status) === 'Adoptable' ? 'status--adoptable' : 'status--adopted',
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
  }

  export async function getDogData(dogURL, setDog, setLoading) {
    postData('https://api.petfinder.com/v2/oauth2/token', { grant_type, client_id, client_secret})
      .then(data => {
        let accessToken = data.access_token;
        getData(accessToken, dogURL)
        .then(res => {
          
          let { animal } = res;

          let goodWith = [];
          let notGoodWith = [];

          pushToGoodOrNotGoodWith(animal.environment.dogs, 'Other dogs', goodWith, notGoodWith);
          pushToGoodOrNotGoodWith(animal.environment.children, 'Children', goodWith, notGoodWith);
          pushToGoodOrNotGoodWith(animal.environment.dogs, 'Cats', goodWith, notGoodWith);

          let vaccinated = animal.attributes.shots_current ? 'Vaccinations up to date' : 'Not Vaccinated';
          let neutered = animal.attributes.spayed_neutered ? 'Spayed/Neutered' : 'Not Spayed and Neutered'
          let health = `${vaccinated}, ${neutered}.`;
          let contactAddress = `${animal.contact.address.address1}\n${animal.contact.address.city}, ${animal.contact.address.state} ${animal.contact.address.postcode}`;

          let dog = {
            id: animal.id,
            title: animal.name,
            description: animal.description,
            breed: animal.breeds.secondary === null ? animal.breeds.primary : `${animal.breeds.primary} & ${animal.breeds.secondary}`,
            location: `${animal.contact.address.city},  ${animal.contact.address.state}`, 
            status: titleCase(animal.status) === 'Adoptable' ? titleCase(animal.status) : titleCase(animal.status) + ' 🎉',
            statusClass: titleCase(animal.status) === 'Adoptable' ? 'status--adoptable' : 'status--adopted',
            age: animal.age,
            gender: animal.gender,
            size: animal.size,
            houseTrained: animal.attributes.house_trained ? 'Yes' : 'No',
            health: health,
            goodWith: splitArrayWithComma(goodWith),
            notGoodWith: splitArrayWithComma(notGoodWith),
            imgUrl1: animal.photos[0] === undefined ? `/${process.env.PUBLIC_URL}icons/placeholder-icon.svg` : animal.photos[0].medium,
            imgUrl2: animal.photos[1] === undefined ? `/${process.env.PUBLIC_URL}icons/placeholder-icon.svg` : animal.photos[1].medium,
            imgUrl3: animal.photos[2] === undefined ? `/${process.env.PUBLIC_URL}icons/placeholder-icon.svg` : animal.photos[2].medium,
            email: animal.contact.email || '',
            phone: animal.contact.phone || '',
            contactAddress: contactAddress || ''
            
          }
          setDog(dog);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    })
  }