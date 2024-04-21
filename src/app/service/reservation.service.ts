import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  // Méthode pour récupérer toutes les réservations
  getAllReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>('http://localhost:3000/reservations/all');
  }
  
  // Méthode pour ajouter une réservation
  makeReservation(reservationData: Reservation): Observable<any> {
    return this.httpClient.post<Reservation>('http://localhost:3000/reservations/create', reservationData);
  }

  // Méthode pour mettre à jour une réservation
  updateReservation(numero: number, reservationData: Reservation): Observable<any> {
    return this.httpClient.put<Reservation>(`http://localhost:3000/reservations/update/${numero}`, reservationData);
  }

  // Méthode pour supprimer une réservation
  cancelReservation(numero: number): Observable<any> {
    return this.httpClient.delete<Reservation>(`http://localhost:3000/reservations/delete/${numero}`);
  }
}
