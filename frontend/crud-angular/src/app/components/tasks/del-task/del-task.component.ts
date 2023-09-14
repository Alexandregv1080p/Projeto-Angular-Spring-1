import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/Client';
import { Task } from 'src/app/model/Task';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { TasksService } from 'src/app/services/task.service';

@Component({
  selector: 'app-del-task',
  templateUrl: './del-task.component.html',
  styleUrls: ['./del-task.component.scss']
})
export class DelTaskComponent implements OnInit {
  form: FormGroup
  clientes!:Client[]
  task!:Task

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private taskService: TasksService,
    private formBuilder: FormBuilder,
    private clientService: ClientServiceService
  ) {
    this.form = this.formBuilder.group({
      clientId: [null, [Validators.required]],
      nomeTarefa: ['', Validators.required],
      status: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.taskService.readById(id).subscribe(task=>{
      this.task = task
    })
  }
  deleteTask(){
    this.taskService.remove(this.task.id).subscribe(() => {
      this.taskService.showMensage("Tarefa deletada com sucesso!")
      this.router.navigate(["clientes"])
    })
  }
  onCancel() {
  }
}