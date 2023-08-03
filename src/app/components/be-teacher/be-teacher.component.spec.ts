import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeTeacherComponent } from './be-teacher.component';

describe('BeTeacherComponent', () => {
  let component: BeTeacherComponent;
  let fixture: ComponentFixture<BeTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
