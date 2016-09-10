import { Component, OnInit } from '@angular/core';
import { caseFile, CaseFile } from './case-file';
const template = require('./case-file.component.pug');


@Component({
  selector: 'ed-case-file',
  template: template() 
})
export class CaseFileComponent implements OnInit {
  caseFile:CaseFile;

  constructor() {  
  }

  ngOnInit() { 
    this.caseFile = caseFile;
  }
}