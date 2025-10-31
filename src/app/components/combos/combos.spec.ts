import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combos } from './combos';

describe('Combos', () => {
  let component: Combos;
  let fixture: ComponentFixture<Combos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Combos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Combos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
