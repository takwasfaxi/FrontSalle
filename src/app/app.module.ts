import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllSallesComponent } from './component/get-all-salles/get-all-salles.component';
import { GetSalleDetailsByNumeroComponent } from './component/get-salle-details-by-numero/get-salle-details-by-numero.component';
import { AddSalleComponent } from './component/add-salle/add-salle.component';
import { UpdateSalleComponent } from './component/update-salle/update-salle.component';
import { DeleteSalleComponent } from './component/delete-salle/delete-salle.component';
import { GetAllReservationsComponent } from './component/get-all-reservations/get-all-reservations.component';
import { MakeReservationComponent } from './component/make-reservation/make-reservation.component';
import { UpdateReservationComponent } from './component/update-reservation/update-reservation.component';
import { CancelReservationComponent } from './component/cancel-reservation/cancel-reservation.component';
import { GetAllUsersComponent } from './component/get-all-users/get-all-users.component';
import { GetUserByIdComponent } from './component/get-user-by-id/get-user-by-id.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';
import { AuthenticateUserComponent } from './component/authenticate-user/authenticate-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllSallesComponent,
    GetSalleDetailsByNumeroComponent,
    AddSalleComponent,
    UpdateSalleComponent,
    DeleteSalleComponent,
    GetAllReservationsComponent,
    MakeReservationComponent,
    UpdateReservationComponent,
    CancelReservationComponent,
    GetAllUsersComponent,
    GetUserByIdComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AuthenticateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
