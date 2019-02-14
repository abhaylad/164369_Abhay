import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTwoNumberDemoComponent } from './add-two-number-demo.component';

describe('AddTwoNumberDemoComponent', () => {
  let component: AddTwoNumberDemoComponent;
  let fixture: ComponentFixture<AddTwoNumberDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTwoNumberDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTwoNumberDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
