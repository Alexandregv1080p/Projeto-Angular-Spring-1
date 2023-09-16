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
  task: Task = {
    cliente: { name: '' }, nomeTarefa: '', status: false,
    id: ''
  };
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
      if (task.cliente) {
        this.task.cliente = task.cliente;  // Assign the client details to task if available
        console.log(task.cliente)
      }
      this.task.id = id;
      this.task.nomeTarefa = task.nomeTarefa;
      this.task.status = task.status;
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
