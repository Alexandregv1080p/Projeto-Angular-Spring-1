import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ClientServiceService } from 'src/app/services/client-service.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Status {
  viewValue: string;
}
interface Level {
  viewValue: string;
}
@Component({
  selector: 'app-reg-client',
  templateUrl: './reg-client.component.html',
  styleUrls: ['./reg-client.component.scss',]
})
export class RegClientComponent {
  form: FormGroup
  constructor(private clientService: ClientServiceService,
    private router: Router,
    private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      image:[null],
      name:[null],
      email:[null],
      lastName:[null],
      title:[null],
      position:[null],
      status:[null],
      dataNasc:[null]
    })
  }
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  status: Status[] = [
    {viewValue: 'Active'},
    {viewValue: 'Offline'},
    {viewValue: 'Onboarding'},
  ];
  levels: Level[] = [
    {viewValue:'Junior'},
    {viewValue:'Pleno'},
    {viewValue:'Senior'}
  ]

  onCancel():void{
    this.router.navigate(["clientes"])
  }
  onSubmit(){
    this.clientService.save(this.form.value)
      .subscribe(() => {
        this.clientService.showMensage("Cliente cadastrado com sucesso!")
        this.router.navigate(["clientes"])
      })
      
  }
 
}
