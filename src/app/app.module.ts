import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FeRadioComponent } from './fe-radio/fe-radio.component';
import { FeCheckboxComponent } from './fe-checkbox/fe-checkbox.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AsideBarComponent,
    MainContainerComponent,
    UploadComponent,
    FeRadioComponent,
    FeCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
