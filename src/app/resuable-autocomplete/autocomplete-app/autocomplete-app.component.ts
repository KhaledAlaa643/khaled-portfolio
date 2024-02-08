import { Component,EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-app',
  templateUrl: './autocomplete-app.component.html',
  styleUrls: ['./autocomplete-app.component.scss'],
    exportAs: 'appAutocomplete',
})
export class AutocompleteAppComponent {
  autocompleteForm!:FormGroup
  @Output() selectionChanged = new EventEmitter<string>();
  @Input() allSuggestions: string[] = [];
  searchTerm: string = '';
  suggestions: string[] = [];
  constructor(private fb:FormBuilder) {
    this.autocompleteForm = this.fb.group({
      search: [""]
    })
  }
  onInput(): void {
    const search = this.autocompleteForm.value.search.toLowerCase()
    this.suggestions = this.allSuggestions.filter(suggestion => suggestion.toLowerCase().includes(search));
  }
  selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    this.suggestions = [];
    this.selectionChanged.emit(suggestion);
  }
}
