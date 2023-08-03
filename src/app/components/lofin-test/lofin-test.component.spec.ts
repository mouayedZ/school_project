import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LofinTestComponent } from './lofin-test.component';

describe('LofinTestComponent', () => {
  let component: LofinTestComponent;
  let fixture: ComponentFixture<LofinTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LofinTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LofinTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
