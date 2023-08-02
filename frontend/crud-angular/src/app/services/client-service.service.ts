import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/Client';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private readonly API = 'http://localhost:8080/api/clients'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Client[]>(this.API)
    .pipe(
      first(),
      tap(clients => console.log(clients))
    )
  }
}
