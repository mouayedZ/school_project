import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeacherComponent } from './search-teacher.component';

describe('SearchTeacherComponent', () => {
  let component: SearchTeacherComponent;
  let fixture: ComponentFixture<SearchTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
