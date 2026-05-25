import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burger } from './burger';

describe('Burger', () => {
  let component: Burger;
  let fixture: ComponentFixture<Burger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Burger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Burger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
