import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedSignupComponent } from './confirmed-signup.component';

describe('ConfirmedSignupComponent', () => {
  let component: ConfirmedSignupComponent;
  let fixture: ComponentFixture<ConfirmedSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
