import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { World } from '../shared/models/world.model';
import { Country } from '../shared/models/country.model';

import { api } from '../shared/utils/url-api';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  /**
   * Informa dados da situação do covid-19 no cenário mundial.
   *
   * @returns {Observable<World>}
   * @memberof CovidService
   */
  getWorldData(): Observable<World> {
    return this.http.get<World>(`${api}/all`);
  }

  /**
   * Informa dados da situação do covid-19 em um país específico.
   *
   * @param {string} [country='Brazil'] nome do país. Por padrão será o Brazil.
   * @returns {Observable<Country>}
   * @memberof CovidService
   */
  getCountryData(country: string = 'Brazil'): Observable<Country> {
    return this.http.get<Country>(`${api}/countries/${country}`);
  }

}
