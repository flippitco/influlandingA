import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthSlideComponent } from './fourth-slide.component';

describe('FourthSlideComponent', () => {
  let component: FourthSlideComponent;
  let fixture: ComponentFixture<FourthSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
