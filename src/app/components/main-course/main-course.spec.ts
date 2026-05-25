import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCourse } from './main-course';

describe('MainCourse', () => {
  let component: MainCourse;
  let fixture: ComponentFixture<MainCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
