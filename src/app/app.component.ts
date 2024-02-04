import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Khaled-Portfolio';
  allSuggestions: string[] = ["Apple", "Banana", "Cherry", "Date", "Grape", "Lemon", "Mango", "Orange", "Peach", "Pear"]
  onSelectionChanged(selectedValue: string): void {
    console.log('Selected value:', selectedValue);
  }
}
