import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBarComponent } from './search-results/search-bar/search-bar.component';
import { ArtistDisplayComponent } from './search-results/artist-display/artist-display.component';
import {SearchService} from './search-results/services/search-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchBarComponent,
    ArtistDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
