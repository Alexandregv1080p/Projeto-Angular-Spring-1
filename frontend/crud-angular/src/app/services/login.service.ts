import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isLoggedIn(): boolean {
    // Lógica para verificar se o usuário está autenticado, por exemplo, usando um token JWT
    return localStorage.getItem('token') !== null;
  }
}
