import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSallesComponent } from './get-all-salles.component';

describe('GetAllSallesComponent', () => {
  let component: GetAllSallesComponent;
  let fixture: ComponentFixture<GetAllSallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllSallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
