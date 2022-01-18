import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldeCompteCourantComponent } from './solde-compte-courant.component';

describe('SoldeCompteCourantComponent', () => {
  let component: SoldeCompteCourantComponent;
  let fixture: ComponentFixture<SoldeCompteCourantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldeCompteCourantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldeCompteCourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
