import { SUSPECTS } from '../data/suspect.data';

export class Suspect {
  data:any;

  constructor(private suspectId:number) {
    this.data = SUSPECTS[suspectId]; 
  }
}