import { Component, OnInit } from '@angular/core';
import { CaseFile } from './case-file';
import { CaseFileService } from '../../../services/case-file.service';
const template = require('./case-file.component.pug');


@Component({
  selector: 'ed-case-file',
  template: template() 
})
export class CaseFileComponent implements OnInit {
  caseFile:CaseFile;

  constructor(private caseFileService:CaseFileService) {  
  }

  ngOnInit() { 
    this.caseFile = this.caseFileService.getCaseFile();
  }
}