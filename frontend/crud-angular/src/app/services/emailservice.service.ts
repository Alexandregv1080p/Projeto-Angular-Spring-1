import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  private baseUrl = 'api/email';
  

  constructor(private http: HttpClient, private snackBar:MatSnackBar) { }
  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  sendEmail(emailData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send`, emailData);
  }
}
