import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // Méthode pour récupérer tous les utilisateurs
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users/all');
  }

  // Méthode pour récupérer un utilisateur par son ID
  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`);
  }

  // Méthode pour ajouter un utilisateur
  createUser(userData: User): Observable<any> {
    return this.httpClient.post<User>('http://localhost:3000/users/register', userData);
  }

  // Méthode pour mettre à jour un utilisateur
  updateUser(id: string, userData: User): Observable<any> {
    return this.httpClient.put<User>(`http://localhost:3000/users/update/${id}`, userData);
  }

  // Méthode pour supprimer un utilisateur
  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete<User>(`http://localhost:3000/users/delete/${id}`);
  }

  // Méthode pour authentifier un utilisateur
  authenticateUser(userData: {email: string, password: string}): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/users/login', userData);
  }
}
