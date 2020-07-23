import { Wold } from './wold.model';

interface CountryInfo {
  flag: string;
}

export interface Country extends Wold {
  country: string;
  todayDeaths: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  countryInfo: CountryInfo;
}
