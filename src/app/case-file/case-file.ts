export class CaseFile {
  victim:string = "John Doe";
  murderLocation:string = "Docks"
  murdererSex:string;
  murderWeapon:string;
  locations:Object = {};

  constructor() {
  }
}

export const caseFile = new CaseFile();
