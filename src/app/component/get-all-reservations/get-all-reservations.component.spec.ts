import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllReservationsComponent } from './get-all-reservations.component';

describe('GetAllReservationsComponent', () => {
  let component: GetAllReservationsComponent;
  let fixture: ComponentFixture<GetAllReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllReservationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
