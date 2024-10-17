import React, { useEffect, useState } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import Toolbar from '../../components/Toolbar/Toolbar.tsx';
import  axios from 'axios';
import { Country } from '../../types';
import { BASE_URL_ALL_COUNTRIES } from '../../constants.ts';
import ListOfCountries from '../../components/ListOfCountries/ListOfCountries.tsx';

const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [chosenCountry, setChosenCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      try {
        const responseReq: { data: Country; status: number } =
          await axios<Country[]>(BASE_URL_ALL_COUNTRIES);
        setCountries(responseReq.data);
        console.log(responseReq.data);
        setLoading(false);
      } catch (error) {
        console.error('There is some error occurred while fetching countries', error);
        setLoading(false);
      }
    };

    void getCountry();
  }, []);


  return (
    <>
      <div>
        <Toolbar/>
        <Spinner/>
        <div className="container">
          <ListOfCountries countries={countries} onChosenCountry={setChosenCountry}/>
        </div>
        countries
      </div>
    </>

  );
};

export default Countries;