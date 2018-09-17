import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSlideComponent } from './first-slide.component';

describe('FirstSlideComponent', () => {
  let component: FirstSlideComponent;
  let fixture: ComponentFixture<FirstSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
