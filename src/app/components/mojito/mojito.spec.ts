import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mojito } from './mojito';

describe('Mojito', () => {
  let component: Mojito;
  let fixture: ComponentFixture<Mojito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mojito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mojito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
