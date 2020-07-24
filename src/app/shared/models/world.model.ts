export interface World {
  active: number; // Nº casos ativos
  activePerOneMillion: number; // Nº infectados ativos a cada um milhão de pessoas
  cases: number; // Nº total de infectados
  casesPerOneMillion: number; // Nº de pessoas que tem ou já tiveram covid-19
  critical: number; // Nº pessoas em situação grave por covid-19
  criticalPerOneMillion: number; // Nº pessoas em situação grave a cada 1 milhão de pessoas
  deaths: number; // Nº total de vítimas
  deathsPerOneMillion: number; // Nº de mortos por covid-19 a cada 1 milhão de pessoas
  recovered: number; // total de recuperados
  recoveredPerOneMillion: number; // Nº de recuperados a cada 1 milhão
  affectedCountries: number; // Nº países afetados
  tests: number; // Nº total de testes realizados
  testsPerOneMillion: number; // Nº de testes por cada 1 milhão de pessoas
  todayCases: number; // Nº casos confirmados hoje
  todayDeaths: number; // Nº de vítimas hoje
  todayRecovered: number; // Nº de recuperados hoje
  updated: number;
}
