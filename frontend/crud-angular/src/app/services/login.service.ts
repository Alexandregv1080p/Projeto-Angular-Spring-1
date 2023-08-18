import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'api/authenticate'; // Endpoint de autenticação no backend

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const authRequest = {
      email: email,
      password: password
    };
    return this.httpClient.post(this.API, authRequest);
  }
}
