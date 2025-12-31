import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderProdComponent } from './main-slider-prod.component';

describe('MainSliderProdComponent', () => {
  let component: MainSliderProdComponent;
  let fixture: ComponentFixture<MainSliderProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSliderProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSliderProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
