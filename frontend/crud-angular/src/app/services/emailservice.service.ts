import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  private baseUrl = 'api/email';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send`, emailData);
  }
}
