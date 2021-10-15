import Home from "./Home";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
