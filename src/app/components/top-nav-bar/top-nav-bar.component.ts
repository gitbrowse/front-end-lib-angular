import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.less']
})
export class TopNavBarComponent implements OnInit {

  @Input() title: string

  constructor() { }

  ngOnInit() {
  }

}
