import { Client } from 'src/app/model/Client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private readonly API = 'api/clients'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Client[]>(this.API)
    .pipe(
      first(),
      tap(clients => console.log(clients))
    )
  }
  save(record: Client){
    return this.httpClient.post<Client>(this.API,record)
      .pipe(first())
  }
}
