import React from 'react';
import { ListOfCountriesProps } from '../../types';

const ListOfCountries: React.FC<ListOfCountriesProps> = ({countries, onChosenCountry}) => {
  return (
    <div className="list-group">
      <h3>Choose a Country</h3>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}
              className="list-group-item list-group-item-action">
            <button onClick={() => onChosenCountry(country.alpha3Code)}>{country.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;