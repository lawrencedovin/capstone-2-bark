import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext';

function NavBar() {

  const {user, setUser} = useContext(UserContext);
  
  return(
    <div data-testid="NavBar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link className="navbar__logo" to="/">Bark</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="me-auto"></div>
            <div class="d-flex">
              {user
              ?
                <ul class="navbar-nav me-2">
                  <li class="nav-item">
                    <Link className="nav-link navbar__link" to="/edit">lawrence123</Link>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link navbar__link" href="/breed-list">Breeds</a>
                  </li> */}
                  <li class="nav-item">
                    <Link className="nav-link navbar__link" to="/dog-list">Dogs</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link navbar__link" to="/logout">Logout</Link>
                  </li>
                </ul>
              :
                <ul class="navbar-nav me-2">
                    <li class="nav-item">
                      <Link className="nav-link navbar__link" to="/register">Sign Up</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link navbar__link" to="/login">Login</Link>
                    </li>
                </ul>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
