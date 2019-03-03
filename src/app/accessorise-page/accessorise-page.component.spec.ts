import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorisePageComponent } from './accessorise-page.component';

describe('AccessorisePageComponent', () => {
  let component: AccessorisePageComponent;
  let fixture: ComponentFixture<AccessorisePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessorisePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessorisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
