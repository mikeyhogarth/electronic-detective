import { Component, OnInit } from '@angular/core';
const template = require('./case-file.component.pug');

@Component({
  selector: 'ed-case-file',
  template: template() 
})
export class CaseFileComponent implements OnInit {
  victim:string = "John Doe";
  murderLocation:string = "Docks"

  constructor() { }

  ngOnInit() { }
}