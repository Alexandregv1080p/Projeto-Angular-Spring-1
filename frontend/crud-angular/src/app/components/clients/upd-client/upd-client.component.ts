import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/Client';
import { ClientServiceService } from 'src/app/services/client-service.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-upd-client',
  templateUrl: './upd-client.component.html',
  styleUrls: ['./upd-client.component.scss']
})

export class UpdClientComponent implements OnInit {
  cliente!: Client;

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private clienteService:ClientServiceService){ }
  
  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.readById(id).subscribe(client=>{
      this.cliente = client
    })
  }
  updateClient(){
    this.clienteService.update(this.cliente).subscribe(()=>{
      this.clienteService.showMensage("Cliente atualizado com sucesso!")
    })
  }
  cancel():void{
    this.router.navigate(["clientes"])
  }
  onSucess(){
    this.clienteService.showMensage("Cliente atualizado com sucesso!")
  }
}
