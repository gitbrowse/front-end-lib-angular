import { Component, ViewChild } from '@angular/core';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})




export class AppComponent {
  @ViewChild(TopNavBarComponent) topNavBar: TopNavBarComponent;

  title = '前端工具平台';
}
