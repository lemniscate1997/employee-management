import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  myText: String;
  @Input()
  get text() {
    return this.myText;
  }

  @Output() textChange = new EventEmitter();
  set text(val) {
    this.myText = val;
    this.textChange.emit(this.myText);
  }

  constructor() { }

  ngOnInit() {
  }

}
