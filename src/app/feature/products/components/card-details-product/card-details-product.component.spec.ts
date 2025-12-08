import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsProductComponent } from './card-details-product.component';

describe('CardDetailsProductComponent', () => {
  let component: CardDetailsProductComponent;
  let fixture: ComponentFixture<CardDetailsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailsProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetailsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
