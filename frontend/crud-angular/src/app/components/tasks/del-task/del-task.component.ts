import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/Client';
import { Task } from 'src/app/model/Task';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { TasksService } from 'src/app/services/task.service';

@Component({
  selector: 'app-del-task',
  templateUrl: './del-task.component.html',
  styleUrls: ['./del-task.component.scss'],
})
export class DelTaskComponent implements OnInit {
  clientes!: Client[];
  task!: Task;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TasksService,
    private formBuilder: FormBuilder,
    private clientService: ClientServiceService
  ) {
    
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.taskService.readById(id).subscribe((task) => {
      console.log(task.cliente.name)
      this.task = task;
    });
  }

  deleteTask() {
    this.taskService.remove(this.task.id).subscribe(() => {
      this.taskService.showMensage('Tarefa deletada com sucesso!');
      this.router.navigate(['tasks']);
    });
  }

  onCancel() {
    this.router.navigate(["tasks"])
  }
}
