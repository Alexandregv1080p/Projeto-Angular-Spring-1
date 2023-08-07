import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/Client';
import { ClientServiceService } from 'src/app/services/client-service.service';
import {MatTableModule} from '@angular/material/table';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  clients: Observable<Client[]>
  displayedColumns: string[] = ['id', 'image', 'name', 'lastName','title','position','status','dataNasc','action']; 

  constructor(private clientService: ClientServiceService){
    this.clients = this.clientService.list()
  }
  
}
