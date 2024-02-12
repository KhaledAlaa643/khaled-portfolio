import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableTableComponent {
  @Input() userArray: any[];
  @Input() userConfig!: { label: string, property: string }[];
  @Output() editEvent = new EventEmitter<any>();
  @Output() closeEvent = new EventEmitter<any>();
  @Output() addEvent = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() removeEvent = new EventEmitter<void>();
  oldUserData !: any
  addBtn: boolean = true;
  constructor() {
    this.userArray = [
      {
      name: "ahmed",
      age: 25
      },
      {
      name: "ali",
      age: 35
      },
      {
      name: "mostafa",
      age: 45
      },
    ]    
  }
  edit(userObj: any) {
    this.oldUserData = JSON.stringify(userObj);
    userObj.isEdit = !userObj.isEdit;
    this.addBtn = true;
    this.editEvent.emit(userObj);
  }

  close(userObj: any) {
    const oldObj = JSON.parse(this.oldUserData);
    Object.assign(userObj, oldObj);
    userObj.isEdit = false;
    this.closeEvent.emit(userObj);
  }
  add() {
    const newUser: any = { isEdit: true };
    this.userConfig.forEach(config => {
      newUser[config.property] = '';
    });
    this.addBtn = false;
    this.userArray.unshift(newUser);
    this.addEvent.emit();
  }
  delete(userObj: any) {
    this.userArray = this.userArray.filter((el: any) => el !== userObj);
    this.deleteEvent.emit(userObj);
  }
  remove() {
    this.addBtn = true;
    this.userArray.shift();
    this.removeEvent.emit();
  }
}
