import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from '../model/Task';
import { Observable, first, tap } from 'rxjs';
import { Router } from '@angular/router';

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
    readById(id: string): Observable<Task> {
      let url = `${this.API}/${id}`
      return this.http.get<Task>(url);
    }
    remove(id: string){
      return this.http.delete<Task>(`${this.API}/${id}`)
        .pipe(first())
    }
}