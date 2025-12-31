import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategpryProdComponent } from './categpry-prod.component';

describe('CategpryProdComponent', () => {
  let component: CategpryProdComponent;
  let fixture: ComponentFixture<CategpryProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategpryProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategpryProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
