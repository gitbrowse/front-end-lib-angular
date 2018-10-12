import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestComponent } from '../../components/test/test.component';
import { CommonService } from '../../services/common/common.service';
import { AjaxService } from '../../services/ajax/ajax.service';

import Heroes from '../../class/heroes';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.less'],
  providers: [CommonService, AjaxService]
})
export class GuideComponent implements OnInit {

  @ViewChild('label') label: ElementRef;
  @ViewChild(TestComponent) Test: TestComponent;

  isShowList: Boolean = true;
  list: Heroes[] = [
    { name: 'n1', value: 'v1' },
    { name: 'n2', value: 'v2' },
    { name: 'n3', value: 'v3' },
  ]
  model1: Number = 1;
  date = new Date();

  listClick = (...parms) => {
    console.log(parms);
  }
  showList = () => {
    console.log(this.isShowList);
    this.isShowList = !this.isShowList;
  }
  labelStyle = () => {
    return {
      'color': 'blue'
    };
  }

  constructor(private _commonService: CommonService, private _ajaxService: AjaxService ) { }

  ngOnInit() {
    // console.log(this.label.nativeElement.innerHTML);
    // this.Test.testHandler();
    console.log(this._commonService.getTestData());
    this._ajaxService.getTest().subscribe({
      next: (res) => { console.log(res); }
    });
  }

}
