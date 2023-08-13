import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  private baseUrl = '/api/email/send';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
   return this.http.post(this.baseUrl, emailData, { responseType: 'text' });  }
}
