import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { TasksService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  
	constructor(
    private http: HttpClient,
    public clientService: ClientServiceService,
    public taskService:TasksService){
  }
  ngOnInit(): void {
    this.clientService.list().subscribe(clients => {
      this.clientService.numberOfIds = clients.length;
    });
    this.taskService.listTaskAtivas().subscribe(clients => {
      this.taskService.numberOfIdsActive = clients.length;
    });
    this.taskService.list().subscribe(clients => {
      this.taskService.numberOfIds = clients.length;
    });
  }
  
}
