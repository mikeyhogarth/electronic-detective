import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { CaseFileComponent } from './case-file/case-file.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/suspects', pathMatch: 'full' },
  { path: 'suspects', component: SuspectsComponent },
  { path: 'case-file', component: CaseFileComponent },
  { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);