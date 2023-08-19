import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  
	constructor(private http: HttpClient,public clientService: ClientServiceService){
    
  }
  ngOnInit(): void {
    this.clientService.list().subscribe(clients => {
      this.clientService.numberOfIds = clients.length;
    });
    this.http.get<any>("http://localhost:8080/api/v1/auth/list")
      .subscribe(res => {
        if(res){
          console.log("List ", res)
        }else {
          alert('failed do query list')
        }
      })
  }
  
}
