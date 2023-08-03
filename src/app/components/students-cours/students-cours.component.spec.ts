import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCoursComponent } from './students-cours.component';

describe('StudentsCoursComponent', () => {
  let component: StudentsCoursComponent;
  let fixture: ComponentFixture<StudentsCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
