import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateUserComponent } from './authenticate-user.component';

describe('AuthenticateUserComponent', () => {
  let component: AuthenticateUserComponent;
  let fixture: ComponentFixture<AuthenticateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticateUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
