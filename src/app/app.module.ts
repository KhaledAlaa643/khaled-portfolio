import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { NgAutocompleteComponent } from './ng-autocomplete/ng-autocomplete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { AutocompleteAppComponent } from './resuable-autocomplete/autocomplete-app/autocomplete-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    NgAutocompleteComponent,
    RatingInputComponent,
    AutocompleteAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
