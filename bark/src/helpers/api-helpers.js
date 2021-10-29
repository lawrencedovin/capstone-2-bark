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
