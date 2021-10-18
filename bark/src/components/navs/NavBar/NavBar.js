import React from 'react';

function NavBar() {
  let isLoggedIn = true;
  return(
    <div data-testid="NavBar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar__logo" href="/">Bark</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="me-auto"></div>
            <div class="d-flex">
              {isLoggedIn
              ?
                <ul class="navbar-nav me-2">
                  <li class="nav-item">
                    <a class="nav-link navbar__link" href="/user">lawrence123</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar__link" href="/breeds">Breeds</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar__link" href="/dogs">Dogs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navbar__link" href="/logout">Logout</a>
                  </li>
                </ul>
              :
                <ul class="navbar-nav me-2">
                    <li class="nav-item">
                      <a class="nav-link navbar__link" href="/register">Sign Up</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link navbar__link" href="/login">Login</a>
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
