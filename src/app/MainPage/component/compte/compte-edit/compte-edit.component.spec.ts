import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEditComponent } from './compte-edit.component';

describe('CompteEditComponent', () => {
  let component: CompteEditComponent;
  let fixture: ComponentFixture<CompteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
