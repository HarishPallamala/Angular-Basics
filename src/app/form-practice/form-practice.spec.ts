import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPractice } from './form-practice';

describe('FormPractice', () => {
  let component: FormPractice;
  let fixture: ComponentFixture<FormPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(FormPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
