import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UploadComponent } from './upload/upload.component';
import { FeCheckboxComponent } from './fe-checkbox/fe-checkbox.component';
import { FeRadioComponent } from './fe-radio/fe-radio.component';


const route: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'checkbox', component: FeCheckboxComponent },
  { path: 'radio', component: FeRadioComponent },
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
