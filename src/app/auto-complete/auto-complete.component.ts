import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutoCompleteService } from '../auto-complete.service';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {
  options = ["Sam", "Varun", "Jasmine"];
  filteredOptions:string[] = [];
  formGroup !: FormGroup;
  constructor(private fb : FormBuilder){}
  ngOnInit(){
    this.initForm();
    this.filteredOptions = [...this.options]
  }

  initForm(){
    this.formGroup = this.fb.group({
      'employee' : ['']
    })
    this.formGroup.get('employee')?.valueChanges.subscribe(response => {
      this.filterData(response);
    })
  }
  filterData(enteredData:any){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }
}
