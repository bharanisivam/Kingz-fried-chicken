import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Momos } from './momos';

describe('Momos', () => {
  let component: Momos;
  let fixture: ComponentFixture<Momos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Momos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Momos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
