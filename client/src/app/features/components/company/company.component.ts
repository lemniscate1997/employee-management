import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

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
