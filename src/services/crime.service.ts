import { Injectable } from '@angular/core';
import { Crime } from '../models/crime';

@Injectable()
export class CrimeService {
  crime:Crime;

  constructor() {
    this.resetCrime();
   }

   getCrime() : Crime {
     return this.crime;
   }

   resetCrime() : void {
     this.crime = new Crime();
   }
}