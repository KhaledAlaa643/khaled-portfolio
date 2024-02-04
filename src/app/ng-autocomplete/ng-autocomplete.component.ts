import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutoCompleteService } from '../auto-complete.service';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
@Component({
  selector: 'ng-autocomplete',
  templateUrl: './ng-autocomplete.component.html',
  styleUrls: ['./ng-autocomplete.component.scss']
})
export class NgAutocompleteComponent implements OnInit{
  countries!: any[] ;
  formGroup!: FormGroup;
  filteredCountries!: any[];
  selectedItem: any;
constructor(private countryService: AutoCompleteService) {}
    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
        this.formGroup = new FormGroup({
            selectedCountry: new FormControl<object | null>(null)
        });
    }
    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;
        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        this.filteredCountries = filtered;
    }
}
