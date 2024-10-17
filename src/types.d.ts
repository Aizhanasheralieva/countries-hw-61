export interface Country {
  alpha3Code: string;
  name: string;
  borders?: string[];
}

export interface ListOfCountriesProps {
  countries: Country[];
  onChosenCountry: (alpha3Code: string) => void;
}

export interface Props {
  countryCode: string | null;
}

export interface CountryInfoProps {
  name: string;
  capital: string;
  population: number;
  borders: string[];
}