import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteConsultComponent } from './compte-consult.component';

describe('CompteConsultComponent', () => {
  let component: CompteConsultComponent;
  let fixture: ComponentFixture<CompteConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
