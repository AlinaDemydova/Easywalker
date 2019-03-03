import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBuggyComponent } from './choose-buggy.component';

describe('ChooseBuggyComponent', () => {
  let component: ChooseBuggyComponent;
  let fixture: ComponentFixture<ChooseBuggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseBuggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBuggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
