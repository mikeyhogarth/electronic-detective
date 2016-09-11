import { Component } from '@angular/core';
import { CaseFileService } from '../../services/case-file.service';
import { CrimeService } from '../../services/crime.service';

const template = require('./app.component.pug');

@Component({
  selector: 'ed-app',
  template: template(),
  styleUrls: ['./app.component.scss'],
  providers: [ CaseFileService, CrimeService ]
})
export class AppComponent {
  title = 'Angular 2 Webpack Starter';
}