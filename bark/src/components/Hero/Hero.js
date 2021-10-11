import React from 'react';
import PropTypes from 'prop-types';

const Hero = () => (
  <div data-testid="Hero">
    <div className="hero container-fluid">
      <div className="row text-center align-items-center">
        <div className="col-md-1">
          <ul className="hero__logo">
            <li className="hero__logo-item">
              <img src={process.env.PUBLIC_URL + 'icons/linkedin-icon.svg'} className="" alt="linkedin"/>
            </li>
            <li className="hero__logo-item">
            <img src={process.env.PUBLIC_URL + 'icons/github-icon.svg'} className="" alt="github"/>
            </li>
            <li className="hero__logo-item">
            <img src={process.env.PUBLIC_URL + 'icons/email-icon.svg'} className="" alt="email"/>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <img src={process.env.PUBLIC_URL + 'images/hero-image.jpg'} className="hero__image img-fluid" alt="hero"/> 
        </div>
        <div className="col-md-1">
          Scroll
        </div>
      </div>
    </div>
  </div>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
