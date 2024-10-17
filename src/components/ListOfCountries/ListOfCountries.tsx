import React from 'react';
import { ListOfCountriesProps } from '../../types';

const ListOfCountries: React.FC<ListOfCountriesProps> = ({countries, onChosenCountry}) => {
  return (
    <div className="country-list">
      <h3>Choose a Country</h3>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <button onClick={() => onChosenCountry(country.alpha3Code)}>{country.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;