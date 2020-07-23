import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldDataPanelComponent } from './components/world-data-panel/world-data-panel.component';
import { CountryDataPanelComponent } from './components/country-data-panel/country-data-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldDataPanelComponent,
    CountryDataPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
