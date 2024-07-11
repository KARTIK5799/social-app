import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightProfileSectionComponent } from './right-profile-section.component';

describe('RightProfileSectionComponent', () => {
  let component: RightProfileSectionComponent;
  let fixture: ComponentFixture<RightProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightProfileSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
