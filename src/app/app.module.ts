import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldDataPanelComponent } from './components/world-data-panel/world-data-panel.component';
import { CountryDataPanelComponent } from './components/country-data-panel/country-data-panel.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WorldDataPanelComponent,
    CountryDataPanelComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
