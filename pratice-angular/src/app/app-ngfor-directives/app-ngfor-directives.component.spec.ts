import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgforDirectivesComponent } from './app-ngfor-directives.component';

describe('AppNgforDirectivesComponent', () => {
  let component: AppNgforDirectivesComponent;
  let fixture: ComponentFixture<AppNgforDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNgforDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgforDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
