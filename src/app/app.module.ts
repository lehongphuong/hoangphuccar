import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';

import { TripcarService } from './api/tripcar.service';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
 

// import { ReactiveFormsModule } from '@angular/forms'; 

////https://www.npmjs.com/package/ng-auto-complete
import { NgAutoCompleteModule } from "ng-auto-complete";

//https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md
//https://material.angular.io/guide/getting-started
// import {
//   MatAutocompleteModule,
//   MatInputModule,
//   MatDatepickerModule
// } from '@angular/material';

import { AppComponent } from './app.component';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';


import { DkhnService } from './api/dkhn.service';
import { QlhvService } from './api/qlhv.service';

import { IntegralUIModule } from './integralui/integralui.module';

import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { ToastrModule } from 'ngx-toastr';


import { ReactiveFormsModule } from '@angular/forms';


//https://www.npmjs.com/package/ngx-cookie-service
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './routing.sub-module';
import { HeaderComponent } from './view/header/header.component';
import { MenuComponent } from './view/menu/menu.component';
import { FooterComponent } from './view/footer/footer.component';
import { SearchService } from './api/search.service';
import { ContentComponent } from './view/content/content.component';
import { HomeComponent } from './view/content/home/home.component';
import { GioithieuComponent } from './view/content/gioithieu/gioithieu.component';
import { HuongdanComponent } from './view/content/huongdan/huongdan.component';
import { LienheComponent } from './view/content/lienhe/lienhe.component';
import { ContactComponent } from './view/content/contact/contact.component';
import { CaorouselsComponent } from './view/content/caorousels/caorousels.component';
import { CarComponent } from './view/content/car/car.component';
import { TeamComponent } from './view/content/team/team.component';
import { TableComponent } from './view/content/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    GioithieuComponent,
    HuongdanComponent,
    LienheComponent,
    ContactComponent,
    CaorouselsComponent,
    CarComponent,
    TeamComponent,
    TableComponent,
  ],
  imports: [
    WjCoreModule,
    WjInputModule,
    WjGridModule,
    WjChartModule,
    FormsModule,
    ReactiveFormsModule,
    NgAutoCompleteModule,
    Ng4LoadingSpinnerModule.forRoot(),

    // MatAutocompleteModule,
    // MatInputModule,
    // MatDatepickerModule,

    ToastrModule.forRoot(), // ToastrModule added
    IntegralUIModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyCkCEImdDKsZRHt8wUdAcxEgNDJQ9aG5oQ'
    }),
    WjGridModule,
    AppRoutingModule
  ],
  providers: [
    DkhnService,
    QlhvService,
    TripcarService,
    CookieService,
    SearchService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
