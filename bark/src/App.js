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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
