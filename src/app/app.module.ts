import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './pages/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FeRadioComponent } from './pages/fe-radio/fe-radio.component';
import { FeCheckboxComponent } from './pages/fe-checkbox/fe-checkbox.component';
import { GuideComponent } from './pages/guide/guide.component';
import { TestComponent } from './components/test/test.component';
import { SquarePipe } from './pipes/square/square.pipe';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AsideBarComponent,
    MainContainerComponent,
    UploadComponent,
    FeRadioComponent,
    FeCheckboxComponent,
    GuideComponent,
    TestComponent,
    SquarePipe
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
