import { Suspect } from './suspect';

const Location = {
  A: "Art Show",
  B: "Theatre",
  C: "Card Party",
  D: "Docks",
  E: "Embassy",
  F: "Factory"
}

export class Crime {
  victim:Suspect;
  murderLocation:string;

  constructor() {
    this.generateCrime();
  }

  generateCrime() {
    this.victim = new Suspect(1);
    this.murderLocation = Location.D;
  }
}