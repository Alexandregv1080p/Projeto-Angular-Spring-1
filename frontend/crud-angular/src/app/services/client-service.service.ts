import { Client } from 'src/app/model/Client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private readonly API = 'http://localhost:8080/api/clients'
  clients: Client[] = [];
  numberOfIds: number = 0;
  numberOfActiveIds: number = 0
  numberOfInactiveActiveIds: number = 0

  constructor(
    private httpClient: HttpClient,
    private router:Router,
    private snackBar:MatSnackBar) { }
    
  showMensage(msg: string):void{
      this.snackBar.open(msg,'Fechar',{
        duration:3000,
        horizontalPosition:"right",
        verticalPosition:"top"
      })
    }
  list(){
    return this.httpClient.get<Client[]>(this.API)
    .pipe(
      first(),
      tap(clients => {
        this.clients = clients
        this.numberOfIds = clients.length
      })
    )
  }
  listClientesAtivos(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.API)
      .pipe(
        map(clients => clients.filter(clients => clients.status === "Ativo")),
        tap(activeClients => {
          this.clients = activeClients;
          this.numberOfActiveIds = activeClients.length;
        })
      );
  }
  listClientesInativos(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.API)
      .pipe(
        map(clients => clients.filter(clients => clients.status === "Desativo")),
        tap(activeClients => {
          this.clients = activeClients;
          this.numberOfInactiveActiveIds = activeClients.length;
        })
      );
  }
  read(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.API)
  }
  readById(id: string): Observable<Client> {
    let url = `${this.API}/${id}`
    return this.httpClient.get<Client>(url);
  }
  
  save(record: Client){ 
    return this.httpClient.post<Client>(this.API,record)
      .pipe(first())
  }
  update(cliente: Client):Observable<Client>{
    return this.httpClient.put<Client>(`${this.API}/${cliente.id}`,cliente)
  }
  remove(id: string){
    return this.httpClient.delete<Client>(`${this.API}/${id}`)
      .pipe(first())
  }
  
}
