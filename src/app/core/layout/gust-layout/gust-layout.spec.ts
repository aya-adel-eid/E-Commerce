import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GustLayout } from './gust-layout';

describe('GustLayout', () => {
  let component: GustLayout;
  let fixture: ComponentFixture<GustLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GustLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GustLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
