import React from 'react';
import PropTypes from 'prop-types';

const NavBar = () => (
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
            <ul class="navbar-nav me-2">
              <li class="nav-item">
                <a class="nav-link navbar__link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link navbar__link" href="/">Link</a>
              </li>
              <li class="nav-item">
              <a class="nav-link navbar__link" aria-current="page" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
