import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bbq } from './bbq';

describe('Bbq', () => {
  let component: Bbq;
  let fixture: ComponentFixture<Bbq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bbq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bbq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
