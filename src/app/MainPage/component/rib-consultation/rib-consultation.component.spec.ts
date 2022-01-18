import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibConsultationComponent } from './rib-consultation.component';

describe('RibConsultationComponent', () => {
  let component: RibConsultationComponent;
  let fixture: ComponentFixture<RibConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RibConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
