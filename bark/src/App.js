import Home from "./main-pages/Home/Home";
import Register from "./main-pages/Register/Register"
import Login from "./main-pages/Login/Login";
import EditUser from "./main-pages/EditUser/EditUser";
import Search from "./main-pages/Search/Search";
import DogList from "./main-pages/DogList/DogList";
import BreedList from "./main-pages/BreedList/BreedList";
import BreedDetails from "./main-pages/BreedDetails/BreedDetails";
import DogDetails from "./main-pages/DogDetails/DogDetails";
import NavBar from "./components/navs/NavBar/NavBar";
import { BrowserRouter, Route } from 'react-router-dom';
import { useMemo, useState } from "react";
import { UserContext } from './context/UserContext'; 

function App() {

  // const [state, setState] = useState({data: null});

  // const componentDidMount = () => {
  //     callBackendAPI()
  //       .then(res => setState({ data: res.users }))
  //       .catch(err => console.log(err));
  // }
  // // fetching the GET route from the Express server which matches the GET route from server.js
  // const callBackendAPI = async () => {
  //   const response = await fetch('/users');
  //   const body = await response.json();
  //   console.log(response, body);

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

    // componentDidMount();

  // const [state, setState] = useState({data: []});

  // let yourAccessTokenHere = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoc1pjOGxSME9vbmxUb0JWTm9tV2RpVXIybm9vZFdIZnAzSGlLclg0dFRoV014SjFjRyIsImp0aSI6IjFjNDljYmRhOTJlN2U0YjA0NzczODE1ZmYzNzg1MTIwZGY2ZWI2Y2U1MGNmYTFlNGNkMzJkYjMwYjFlY2FiNWRmMGI4YWQ0MTI4Yjg1YTAzIiwiaWF0IjoxNjM1NDU4MzkwLCJuYmYiOjE2MzU0NTgzOTAsImV4cCI6MTYzNTQ2MTk5MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.n5o0XXiCQuAuSpIHmqgNXO7qPGpwVxX0P7QvX9-wgTKXMCvrsrdhBuCnlSama0CxThCjMZPKCAAk-yQJi_2Pts21EEda8Tul4SYvuh9b-Yyt5wkHAMo_C5EQJkwVXpDRk5L0M1P7ZHw8k5UDouBppeMk37o7YkHgM7jvNsogwS39MpBrs8WaAW4sCQPuRPxxOAYjewFIfOE7AjTMc5h5PYlH9pTwWcpu6Seaye2_gwCHehrZFxWGhJbCciaw6ljaW0qLPPcXjooZzXrYQdED9peNn5cXwuhUMb7gx6I1FEJu_V7fv2SrUQIis3AewOUTfTyx5T8ZOGnetk-0Oea8AQ";

  // const componentDidMount = () => {
  //     callBackendAPI()
  //       .then(res => setState({ data: res.breeds }))
  //       .catch(err => console.log(err));
  // }
  // // fetching the GET route from the Express server which matches the GET route from server.js
  // const callBackendAPI = async () => {
  //   const response = await fetch('https://api.petfinder.com/v2/types/dog/breeds', {
  //     headers: { 'Authorization': 'Bearer ' + yourAccessTokenHere }})
  //   const body = await response.json();
  //   // console.log(response, body);

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  // componentDidMount();

  

  const [user, setUser] = useState(null);

  // If your component is making a lot of changes, the value of the Object is always going to change.
  // The providerValue prevents providerValue from changing unless the value or the setValue changes.

  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={value}>
          <NavBar />
          {/* {state.data.map(user => <h1>{user.username}</h1>)} */}
          {/* <p>{state.data}</p> */}
          {/* {state.data.map(user => <div>{user.name}</div>)} */}
          {/* {state.data.map(breed => <h1>{breed.name}</h1>)} */}
          {/* {state.data ?
          state.data.map(breed => <h1>{breed.name}</h1>)
          :
          <></>
          } */}
          {/* {state.data && state.data.map(person => <h1>{person.id} {person.username}</h1>)} */}
          {/* {state.data.map(home => <div>{home.id}</div>)} */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/edit">
            <EditUser />
          </Route>
          <Route path="/search/breeds=:breed&zipcode=:zipcode">
            <Search />
          </Route>
          <Route exact path="/dog-list">
            <DogList />
          </Route>
          {/* <Route exact path="/breed-list">
            <BreedList />
          </Route> */}
          {/* <Route exact path="/breed-details">
            <BreedDetails />
          </Route> */}
          <Route path="/dog/:id">
            <DogDetails />
          </Route>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
