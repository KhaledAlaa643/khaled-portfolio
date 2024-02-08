import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    searching: any[] = [] ;
    formGroup!: FormGroup;
    filteredCountries!: any[];
    selectedItem: any;
    inputValue!:string
    @Input() type: string = ""
    @Input() labelValue: string = ""
    @Input() searchTerm: string = ""
    url = 'https://restcountries.com/v3.1/name/en'

    constructor(private autoCompleteService: AutoCompleteService) {}
    ngOnInit() {
        this.autoCompleteService.getSearchData(this.inputValue).subscribe((search) => {
            for (const iterator of search) {
                if (iterator.name.common) {
                    const searchIterator = iterator;
                    this.searching.push(searchIterator.name.common);
                }
            }
            console.log(this.url);
        });
    }
    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;
        for (let i = 0; i < this.searching.length; i++) {
            let country = this.searching[i];
            if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
                console.log(this.searching[i]);
            }
        }
        this.filteredCountries = filtered;
    }
}
