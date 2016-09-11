import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { CaseFileComponent } from './case-file/case-file.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, SuspectsComponent, CaseFileComponent, AboutComponent ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}