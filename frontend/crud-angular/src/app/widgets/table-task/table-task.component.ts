import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-table-task',
  templateUrl: './table-task.component.html',
  styleUrls: ['./table-task.component.scss']
})
export class TableTaskComponent implements OnInit {
  
  tasks: Observable<Task[]>
  task!:Task[]
  constructor(private taskService: TasksService,private router:Router){
    this.tasks = this.taskService.list();
  }

  displayedColumns = ['id','cliente','nomeTarefa','status','actions']

  ngOnInit(): void {
      this.taskService.read().subscribe(task =>{
        this.task = task
      })
  }
}
