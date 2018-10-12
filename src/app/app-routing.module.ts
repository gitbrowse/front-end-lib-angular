import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UploadComponent } from './pages/upload/upload.component';
import { FeCheckboxComponent } from './pages/fe-checkbox/fe-checkbox.component';
import { FeRadioComponent } from './pages/fe-radio/fe-radio.component';
import { GuideComponent } from './pages/guide/guide.component';


const route: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'checkbox', component: FeCheckboxComponent },
  { path: 'radio', component: FeRadioComponent },
  { path: 'guide', component: GuideComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
