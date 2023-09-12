import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/Client';
import { Task } from 'src/app/model/Task';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-del-task',
  templateUrl: './del-task.component.html',
  styleUrls: ['./del-task.component.scss']
})
export class DelTaskComponent implements OnInit {
  
  form: FormGroup;
  tasks!:Task
  clientes!:Client[]

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private taskService: TasksService,
    private formBuilder: FormBuilder,
    private clientService:ClientServiceService
  ) {
    this.form = this.formBuilder.group({
      clientId: [null, [Validators.required]],
      nomeTarefa: ['', Validators.required],
      status: [true, Validators.required] 
    });
  }

  ngOnInit(): void {
    this.clientService.list().subscribe((cliente)=>{
      this.clientes = cliente.filter(s => s.status === "Ativo")
      console.log(this.clientes)
    })
    let id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(id).subscribe(task=>{
      this.tasks = task
    })
    
  }

  onSubmit() {
    if (this.form.valid) {
      this.taskService.delete(this.tasks.id).subscribe(() => {
        this.router.navigate(["tasks"]);
      });
    }
  }

  onCancel() {
    this.router.navigate(["tasks"]);
  }

}
