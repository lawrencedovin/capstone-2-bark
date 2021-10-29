import React from 'react';
import { capitalize } from '../../../helpers/general-helpers';

const UserInput = (({name, value, type, handleChange, className}) => {
    return (
          // <input id={name} type={type} name={name}  placeholder={capitalize(name)} value={value} onChange={handleChange} className="form-control forms__input" />
          <input 
              id={name} 
              type={type} 
              name={name} 
              placeholder={capitalize(name)} 
              value={value} 
              onChange={handleChange}
              className={className}
          />
    );
});

export default UserInput