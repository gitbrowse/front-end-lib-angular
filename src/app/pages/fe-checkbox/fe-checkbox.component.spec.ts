import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeCheckboxComponent } from './fe-checkbox.component';

describe('FeCheckboxComponent', () => {
  let component: FeCheckboxComponent;
  let fixture: ComponentFixture<FeCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
