import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeRadioComponent } from './fe-radio.component';

describe('FeRadioComponent', () => {
  let component: FeRadioComponent;
  let fixture: ComponentFixture<FeRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
