import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/Client';
import { Task } from 'src/app/model/Task';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { TasksService } from 'src/app/services/task.service';

@Component({
  selector: 'app-upd-task',
  templateUrl: './upd-task.component.html',
  styleUrls: ['./upd-task.component.scss']
})
export class UpdTaskComponent implements OnInit {
  clientes: Client[] = [];
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
        this.task.cliente.id = task.cliente.id; // Assuming the client's ID is needed for the update
      }
      this.task.id = id
      this.task.nomeTarefa = task.nomeTarefa;
      this.task.status = task.status;
    });

    this.clientService.list().subscribe((clients) => {
      this.clientes = clients;
    });
  }

  updateTask() {
    const requestData = {
      clientId: this.task.cliente.id,  // Use o ID do cliente associado à tarefa
      nomeTarefa: this.task.nomeTarefa,
      status: this.task.status
    };
    console.log(requestData)
    this.taskService.update(this.task.id, requestData).subscribe(() => {
      this.taskService.showMensage('Tarefa atualizada com sucesso!');
      this.router.navigate(['tasks']);
    });
  }

  onCancel() {
    this.router.navigate(["tasks"])
  }
}
