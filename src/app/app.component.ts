import { Component, OnInit } from '@angular/core';
import { AutoCompleteService } from './auto-complete.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myControl = new FormControl();
  myControl2 = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  options2: string[] = ['Four', 'Five', 'Six'];
  
    userArray = [
    { country: 'USA', address: '123 Main St', employee: 'John Doe', department: 'HR' },
    { country: 'Canada', address: '456 Maple Ave', employee: 'Jane Smith', department: 'Finance' },
  ];
  userConfig = [
    { label: 'Country', property: 'country' },
    { label: 'Address', property: 'address' },
    { label: 'Employee', property: 'employee' },
    { label: 'Department', property: 'department' }
  ];
  ngOnInit(): void {

  }
    edit(userObj: any) {
    console.log(`Editing user: ${userObj.employee}`);
  }

  close(userObj: any) {
    console.log(`Closing edit for user: ${userObj.employee}`);
  }

  add() {
    console.log('Adding a new user');
  }

  delete(userObj: any) {
    console.log(`Deleting user: ${userObj.employee}`);
  }

  remove() {
    console.log('Removing the first user');
  }
}
