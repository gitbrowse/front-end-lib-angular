import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  @Input() prefix: string;
  @Input() suffix: string;
  constructor() { }

  testHandler = () => {
    console.log('testHandler');
  }

  ngOnInit() {
  }

}
