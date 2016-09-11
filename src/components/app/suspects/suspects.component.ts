import { Component } from '@angular/core';
import { CrimeService } from '../../../services/crime.service';

const template = require('./suspects.component.pug');

@Component({
  selector: 'ed-suspects',
  template: template() 
})
export class SuspectsComponent {
  constructor(private crimeService:CrimeService) { }
}