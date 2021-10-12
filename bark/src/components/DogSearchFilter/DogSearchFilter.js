import React from 'react';
import PropTypes from 'prop-types';


const DogSearchFilter = () => (
  <div data-testid="DogSearchFilter">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li><a class="dropdown-item" href="/">Dropdown link</a></li>
          <li><a class="dropdown-item" href="/">Dropdown link</a></li>
        </ul>
      </div>
      <div class="input-group">
        <div class="input-group-text" id="btnGroupAddon">@</div>
        <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
      </div>
      <button type="button" class="btn btn-primary">1</button>
    </div>
  </div>
);

DogSearchFilter.propTypes = {};

DogSearchFilter.defaultProps = {};

export default DogSearchFilter;
