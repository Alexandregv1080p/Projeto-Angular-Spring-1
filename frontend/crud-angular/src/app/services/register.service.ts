import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private readonly API = 'api/v1/auth/register'; 

  constructor(private httpClient: HttpClient,private snackBar:MatSnackBar) { }
  
  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  register(firstname: string,lastname: string,email: string, password: string): Observable<any> {
    const authRequest = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    };
    return this.httpClient.post(this.API, authRequest);
  }
}
