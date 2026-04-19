import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCalls } from './http-calls';

describe('HttpCalls', () => {
  let component: HttpCalls;
  let fixture: ComponentFixture<HttpCalls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpCalls],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpCalls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
