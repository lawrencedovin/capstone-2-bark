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
import { useState } from "react";

function App() {

  // const [state, setState] = useState({data: null});

  // const componentDidMount = () => {
  //     callBackendAPI()
  //       .then(res => setState({ data: res.express }))
  //       .catch(err => console.log(err));
  // }
      // fetching the GET route from the Express server which matches the GET route from server.js
  // const callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  // componentDidMount();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <p>{state.data}</p> */}
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
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/dog-list">
          <DogList />
        </Route>
        <Route exact path="/breed-list">
          <BreedList />
        </Route>
        <Route exact path="/breed-details">
          <BreedDetails />
        </Route>
        <Route exact path="/dog-details">
          <DogDetails />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
