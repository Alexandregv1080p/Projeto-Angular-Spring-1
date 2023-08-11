import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  private apiUrl = '/api/email/send';

    constructor(private http: HttpClient) {}

    sendEmail(emailData: any): Observable<any> {
        return this.http.post(this.apiUrl, emailData);
    }
}
