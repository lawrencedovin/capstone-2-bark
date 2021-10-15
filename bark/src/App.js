import Home from "./main-pages/Home/Home";
import Register from "./main-pages/Register/Register"
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
      </BrowserRouter>
    </div>
  );
}

export default App;
