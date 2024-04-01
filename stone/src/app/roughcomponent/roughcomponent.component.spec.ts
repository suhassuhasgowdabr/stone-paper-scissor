import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughcomponentComponent } from './roughcomponent.component';

describe('RoughcomponentComponent', () => {
  let component: RoughcomponentComponent;
  let fixture: ComponentFixture<RoughcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoughcomponentComponent]
    });
    fixture = TestBed.createComponent(RoughcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
