import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AutoCompleteService } from '../auto-complete.service';
import { Observable, catchError, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {
  options:string[] = [];
  filteredOptions:any[] = []
  formGroup !: FormGroup;
  myControl = new FormControl('');
  inputValue: string = ''; 
  constructor(private fb : FormBuilder,private autoCompleteService:AutoCompleteService){}
  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.formGroup = this.fb.group({
      'employee' : ['']
    })
    this.formGroup.get('employee')?.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap((userInput: string) => {
      if (!userInput.trim()  ) {
        this.filteredOptions = [];
        return of([]); 
      }
      return this.autoCompleteService.getSearchData(userInput)
      }))
      .subscribe((response: any) => {
          this.filteredOptions = [];
            if (Array.isArray(response)) {
              for (const iterator of response) {
                this.filteredOptions.push(iterator);
              }
            }
      },
  )}
}

