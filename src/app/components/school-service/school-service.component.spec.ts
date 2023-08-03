import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolServiceComponent } from './school-service.component';

describe('SchoolServiceComponent', () => {
  let component: SchoolServiceComponent;
  let fixture: ComponentFixture<SchoolServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
