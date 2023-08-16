import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/Client';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { TableComponent } from 'src/app/widgets/table/table.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  
	constructor(public clientService: ClientServiceService){
    
  }
  ngOnInit(): void {
    this.clientService.list().subscribe(clients => {
      this.clientService.numberOfIds = clients.length;
    });
  }
  
}
