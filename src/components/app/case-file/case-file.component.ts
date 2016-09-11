import { Component, OnInit } from '@angular/core';
import { CaseFile } from '../../../models/case-file';
import { Crime } from '../../../models/crime';
import { CaseFileService } from '../../../services/case-file.service';
import { CrimeService } from '../../../services/crime.service';

const template = require('./case-file.component.pug');


@Component({
  selector: 'ed-case-file',
  template: template() 
})
export class CaseFileComponent implements OnInit {
  caseFile:CaseFile;
  crime:Crime;

  constructor(private caseFileService:CaseFileService, private crimeService:CrimeService) {}

  ngOnInit() { 
    this.caseFile = this.caseFileService.getCaseFile();
    this.crime    = this.crimeService.getCrime();   
  }
}