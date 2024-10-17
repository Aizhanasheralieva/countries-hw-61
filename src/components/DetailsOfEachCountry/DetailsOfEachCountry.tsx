import React, { useEffect, useState } from 'react';
import { Country, CountryInfoProps, Props } from '../../types';
import axios from 'axios';
import { URL_FOR_ONE_COUNTRY } from '../../constants.ts';
import Spinner from '../UI/Spinner/Spinner.tsx';

const DetailsOfEachCountry: React.FC<Props> = ({ countryCode }) => {
  const [country, setCountry] = useState<CountryInfoProps | null>(null);  // Указываем возможность null
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (countryCode) {
      const getCountryDetails = async () => {
        setLoading(true);
        try {
          const responseReq = await axios.get<Country>(`${URL_FOR_ONE_COUNTRY}${countryCode}`);
          setCountry(responseReq.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
      void getCountryDetails();
    }
  }, [countryCode]);


  if (!countryCode) {
    return <div className="alert alert-info">Please choose a country</div>;
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {country ? (
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{country.name}</h3>
                <p className="card-text">
                  <strong>Capital: </strong>{country.capital}
                </p>
                <p className="card-text">
                  <strong>Population: </strong>{country.population} people
                </p>
                <p className="card-text">
                  <strong>Borders with:</strong> {country.borders.join(', ') || 'No bordering countries'}
                </p>
                <div><img className="w-50" src={country.flag} alt={`${country.name} flag`}/></div>
              </div>
            </div>
          ) : (
            <div className="alert alert-danger">Country details not found</div>
          )}
        </>
      )}
    </>
  );
};
export default DetailsOfEachCountry;
