import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsultComponent } from './user-consult.component';

describe('UserConsultComponent', () => {
  let component: UserConsultComponent;
  let fixture: ComponentFixture<UserConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
