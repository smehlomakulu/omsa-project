import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';


import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MasonryGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
