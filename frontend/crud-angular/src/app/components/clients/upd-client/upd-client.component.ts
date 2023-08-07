import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
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
  
  form = this.formBuilder.group({
    image:[''],
    name:[''],
    email:[''],
    lastName:[''],
    title:[''],
    position:[''],
    status:[''],
    dataNasc:['']
  })
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private clienteService:ClientServiceService,
    private formBuilder: NonNullableFormBuilder){ }
  
  ngOnInit(): void{
    const client: Client = this.route.snapshot.data['client']
    this.form.setValue({
      id:client.id,
      image:client.image,
      name:client.name,
      email:client.email,
      lastname:client.lastname,
      title:client.title,
      position:client.position,
      status:client.status,
      dataNasc:client.dataNasc
    })
  }
  onSubmit(){
    this.clienteService.save(this.form.value)
      .subscribe(result => this.onSucess())
  }
  cancel():void{
    this.router.navigate(["clientes"])
  }
  onSucess(){
    this.clienteService.showMensage("Cliente atualizado com sucesso!")
  }
}
