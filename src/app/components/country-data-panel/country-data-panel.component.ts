
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';

import { faExclamationTriangle, faCheck, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import { UtilsService } from './../../services/utils.service';
import { CovidService } from './../../services/covid.service';

import { Country } from './../../shared/models/country.model';


@Component({
  selector: 'app-country-data-panel',
  templateUrl: './country-data-panel.component.html',
  styleUrls: ['./country-data-panel.component.css']
})
export class CountryDataPanelComponent implements OnInit, OnDestroy {

  public country: Country;
  public renderComponent: boolean;
  public alert = faExclamationTriangle;
  public success = faCheck;
  public globo = faGlobeAmericas;
  private subscription: Subscription;
  private subscriptionChangeCountry: Subscription;

  constructor(
    private serviceUtils: UtilsService,
    private serviceCovid: CovidService
  ) { }

  ngOnInit(): void {
    this.renderComponent = false;
    this.loadData();
  }

  ngOnDestroy(): void {
    this.serviceUtils.unsubscribe(this.subscription);
    this.serviceUtils.unsubscribe(this.subscriptionChangeCountry);
  }

  loadData(name: any = 'Brazil'): void {
    this.subscription = this.serviceCovid.getCountryData(name).subscribe(
      (country: Country) => {
        this.country = country;
      },
      e => console.error(e),
      () => this.renderComponent = true
    );
  }

  async changeCountry(){
    const { value: nameCountry } = await Swal.fire({
      title: 'Informe um País:',
      input: 'text',
      inputPlaceholder: 'País'
    })
    if (nameCountry) {
      this.loadData(nameCountry);
    }
  }

}
