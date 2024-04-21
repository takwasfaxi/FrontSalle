import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private httpClient: HttpClient) { }

  // Méthode pour récupérer toutes les salles
  getAllSalles(): Observable<Salle[]> {
    return this.httpClient.get<Salle[]>('http://localhost:3000/salles/all');
  }

  // Méthode pour récupérer une salle par son numéro
  getSalleDetailsByNumero(numero: number): Observable<Salle> {
    return this.httpClient.get<Salle>(`http://localhost:3000/salles/${numero}`);
  }

  // Méthode pour ajouter une salle
  addSalle(salleData: Salle): Observable<any> {
    return this.httpClient.post<Salle>('http://localhost:3000/salles/create', salleData);
  }

  // Méthode pour mettre à jour une salle
  updateSalle(numero: number, salleData: Salle): Observable<any> {
    return this.httpClient.put<Salle>(`http://localhost:3000/salles/update/${numero}`, salleData);
  }

  // Méthode pour supprimer une salle
  deleteSalle(numero: number): Observable<any> {
    return this.httpClient.delete<Salle>(`http://localhost:3000/salles/delete/${numero}`);
  }
}
