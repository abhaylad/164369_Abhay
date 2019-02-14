import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingdemoComponent } from './propertybindingdemo.component';

describe('PropertybindingdemoComponent', () => {
  let component: PropertybindingdemoComponent;
  let fixture: ComponentFixture<PropertybindingdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertybindingdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertybindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
