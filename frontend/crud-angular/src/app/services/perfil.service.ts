import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../model/UserDetails';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly API = 'api/v1/auth'

  constructor(private http: HttpClient,private snackBar:MatSnackBar) { }
  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  getUserProfile(): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${this.API}/user-profile`);
  }
  updateProfile(request: UserDetails): Observable<void> {
    return this.http.put<void>(`${this.API}/update-profile`, request);
  }
}
