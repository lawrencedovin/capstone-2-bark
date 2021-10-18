import Home from "./main-pages/Home/Home";
import Register from "./main-pages/Register/Register"
import Login from "./main-pages/Login/Login";
import EditUser from "./main-pages/EditUser/EditUser";
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
        <Route exact path="/user/edit">
          <EditUser />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
