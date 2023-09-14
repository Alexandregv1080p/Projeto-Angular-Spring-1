import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.clientService.list().subscribe((cliente)=>{
      this.clientes = cliente.filter(s => s.status === "Ativo")
      console.log(this.clientes)
    })
  }
  onSubmit() {
    if (this.form.valid) {
      const clientId = this.form.get('clientId')?.value
      console.log(clientId)

      if (clientId !== null) {
        this.taskService.create({ ...this.form.value, clientId: +clientId  }).subscribe(() => {
          this.taskService.showMensage("Tarefa cadastrada com sucesso!");
          this.router.navigate(["tasks"]);
        });
      } else {
        console.log(this.form.value)
        this.taskService.showMensage("Selecione um cliente válido!");
      }
    } else {
      this.taskService.showMensage("Preencha todos os campos corretamente!");
    }
  }
  onCancel() {
  }
}