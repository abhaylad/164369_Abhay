import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgIfComponent } from './app-ng-if.component';

describe('AppNgIfComponent', () => {
  let component: AppNgIfComponent;
  let fixture: ComponentFixture<AppNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
