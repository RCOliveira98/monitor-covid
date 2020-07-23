import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { faExclamationTriangle, faCheck, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import { World } from './../../shared/models/world.model';

import { CovidService } from './../../services/covid.service';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-world-data-panel',
  templateUrl: './world-data-panel.component.html',
  styleUrls: ['./world-data-panel.component.css']
})

export class WorldDataPanelComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public world: World;
  public renderComponent: boolean;
  public alert = faExclamationTriangle;
  public success = faCheck;
  public globo = faGlobeAmericas;

  constructor(
    private serviceUtil: UtilsService,
    private serviceCovid: CovidService
  ) { }

  ngOnInit(): void {
    this.renderComponent = false;
    this.loadData();
  }

  ngOnDestroy(): void {
    this.serviceUtil.unsubscribe(this.subscription);
  }

  loadData(): void {
    this.serviceUtil.unsubscribe(this.subscription);
    this.renderComponent = false;

    this.subscription = this.serviceCovid.getWorldData().subscribe(
      (data: World) => this.world = data,
      e => console.error(e),
      () => this.renderComponent = true
      );
  }

}
