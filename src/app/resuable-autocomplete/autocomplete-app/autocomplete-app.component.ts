import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { OptionComponent } from '../option/option.component';
import { merge, switchMap } from 'rxjs';

@Component({
  selector: 'app-autocomplete-app',
  templateUrl: './autocomplete-app.component.html',
  styleUrls: ['./autocomplete-app.component.scss'],
    exportAs: 'appAutocomplete',
})
export class AutocompleteAppComponent {


  @Output() selectionChanged = new EventEmitter<string>();
  @Input() searchTerm: string = '';
  suggestions: string[] = [];
  @Input() allSuggestions: string[] = ["Apple", "Banana", "Cherry", "Date", "Grape", "Lemon", "Mango", "Orange", "Peach", "Pear"];
  onInput(): void {
    this.suggestions = this.allSuggestions.filter(suggestion => suggestion.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    this.suggestions = [];
    this.selectionChanged.emit(suggestion);
  }
}
