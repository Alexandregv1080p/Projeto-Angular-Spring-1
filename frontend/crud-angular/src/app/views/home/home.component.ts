import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { TableComponent } from 'src/app/widgets/table/table.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
  tableComponent: TableComponent;

	constructor(){
    this.tableComponent = new TableComponent(clientService);
  }
  ngOnInit(){
    
  }
}
