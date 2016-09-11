import { Injectable } from '@angular/core';
import { CaseFile } from '../components/app/case-file/case-file';

@Injectable()
export class CaseFileService {
  caseFile:CaseFile;

  constructor() {
    this.resetCaseFile();
  }

  resetCaseFile() {
    this.caseFile = new CaseFile();
  }

  getCaseFile() {
    return this.caseFile;
  }
}