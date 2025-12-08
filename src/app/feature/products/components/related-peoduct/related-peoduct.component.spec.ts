import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPeoductComponent } from './related-peoduct.component';

describe('RelatedPeoductComponent', () => {
  let component: RelatedPeoductComponent;
  let fixture: ComponentFixture<RelatedPeoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedPeoductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedPeoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
