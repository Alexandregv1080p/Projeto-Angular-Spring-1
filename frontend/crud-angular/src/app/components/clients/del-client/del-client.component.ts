import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-del-client',
  templateUrl: './del-client.component.html',
  styleUrls: ['./del-client.component.scss']
})
export class DelClientComponent {
  cliente!: Client 

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private clienteService:ClientServiceService){ }
  
  ngOnInit():void{
    let id = this.route.snapshot.params['id'];
    this.clienteService.readById(id).subscribe(client=>{
      this.cliente = client
    })
  }
  deleteClient(){
    this.clienteService.remove(this.cliente.id).subscribe(() => {
      this.clienteService.showMensage("Cliente atualizado com sucesso!")
      this.router.navigate(["clientes"])
    })
  }
  cancel():void{
    this.router.navigate(["clientes"])
  }
}
