import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSalleDetailsByNumeroComponent } from './get-salle-details-by-numero.component';

describe('GetSalleDetailsByNumeroComponent', () => {
  let component: GetSalleDetailsByNumeroComponent;
  let fixture: ComponentFixture<GetSalleDetailsByNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetSalleDetailsByNumeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSalleDetailsByNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
