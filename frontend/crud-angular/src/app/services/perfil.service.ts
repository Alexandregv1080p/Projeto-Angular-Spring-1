import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../model/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly API = 'api/v1/auth'

  constructor(private http: HttpClient) { }


  getUserProfile(): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${this.API}/user-profile`);
  }
  updateProfile(request: UserDetails): Observable<void> {
    return this.http.put<void>(`${this.API}/update-profile`, request);
  }
}
