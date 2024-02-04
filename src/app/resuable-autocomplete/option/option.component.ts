import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable, fromEvent, mapTo } from 'rxjs';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() value!: string;  
  click$!: Observable<string>;  
  
  constructor(private host: ElementRef) {}  
  
  ngOnInit() {  
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));  
  }  
  
  get element() {  return this.host.nativeElement; }  
}
