import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fries } from './fries';

describe('Fries', () => {
  let component: Fries;
  let fixture: ComponentFixture<Fries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
