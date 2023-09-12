import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from 'express';
import { Task } from '../model/Task';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private readonly API = 'http://localhost:8080/api/tasks'
  task: Task[] = []
  numberOfIds: number = 0;
  constructor(private http: HttpClient,
    private router:Router,
    private snackBar:MatSnackBar) { }
    showMensage(msg: string):void{
      this.snackBar.open(msg,'Fechar',{
        duration:3000,
        horizontalPosition:"right",
        verticalPosition:"top"
      })
    }
    create(task:Task):Observable<Task>{
      return this.http.post<Task>(this.API,task)
      .pipe(first())
    }
    read():Observable<any[]>{
      return this.http.get<Task[]>(this.API)
    }
    list(){
      return this.http.get<Task[]>(this.API)
      .pipe(
        first(),
        tap(task => {
          this.task = task
          this.numberOfIds = task.length
        })
      )
    }
}
