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
  
  ngOnInit(): void {

  }
}
