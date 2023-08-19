import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/api/v1/auth/authenticate'; // Endpoint de autenticação no backend

  constructor(private httpClient: HttpClient,private snackBar:MatSnackBar) { }

  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  login(email: string, password: string): Observable<any> {
    const authRequest = {
      email: email,
      password: password
    };
    return this.httpClient.post(this.API, authRequest);
  }
  getAuthenticatedResource(): Observable<any> {
    const token = sessionStorage.getItem('token');
    
      if (token) {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
        return this.httpClient.get(this.API, { headers });
      }else{
        return new Observable()
      }
  }
}
