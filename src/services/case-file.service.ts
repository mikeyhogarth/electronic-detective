import { Injectable } from '@angular/core';
import { CaseFile } from '../models/case-file';

@Injectable()
export class CaseFileService {
  caseFile:CaseFile;

  constructor() {
    this.resetCaseFile();
  }

  resetCaseFile() : void {
    this.caseFile = new CaseFile();
  }

  getCaseFile() : CaseFile {
    return this.caseFile;
  }
}