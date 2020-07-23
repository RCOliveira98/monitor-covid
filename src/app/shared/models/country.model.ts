import { World } from './world.model';

interface CountryInfo {
  flag: string;
}

export interface Country extends World {
  country: string;
  todayDeaths: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  countryInfo: CountryInfo;
}
