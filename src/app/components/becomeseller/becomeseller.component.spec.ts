import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomesellerComponent } from './becomeseller.component';

describe('BecomesellerComponent', () => {
  let component: BecomesellerComponent;
  let fixture: ComponentFixture<BecomesellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomesellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
