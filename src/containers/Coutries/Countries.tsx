import React, { useEffect, useState } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import Toolbar from '../../components/Toolbar/Toolbar.tsx';
import axios from 'axios';
import { Country } from '../../types';
import { BASE_URL_FOR_ALL_COUNTRIES } from '../../constants.ts';
import ListOfCountries from '../../components/ListOfCountries/ListOfCountries.tsx';
import DetailsOfEachCountry from '../../components/DetailsOfEachCountry/DetailsOfEachCountry.tsx';

const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [chosenCountry, setChosenCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      try {
        const responseReq: { data: Country; status: number } =
          await axios<Country[]>(BASE_URL_FOR_ALL_COUNTRIES);
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <ListOfCountries countries={countries} onChosenCountry={setChosenCountry}/>
            </div>
            <div className="col-md-8">
              <DetailsOfEachCountry countryCode={chosenCountry} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;