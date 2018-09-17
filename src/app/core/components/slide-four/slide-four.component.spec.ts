import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFourComponent } from './slide-four.component';

describe('SlideFourComponent', () => {
  let component: SlideFourComponent;
  let fixture: ComponentFixture<SlideFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
