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