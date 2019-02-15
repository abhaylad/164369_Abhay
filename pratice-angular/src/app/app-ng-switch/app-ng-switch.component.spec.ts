import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgSwitchComponent } from './app-ng-switch.component';

describe('AppNgSwitchComponent', () => {
  let component: AppNgSwitchComponent;
  let fixture: ComponentFixture<AppNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
