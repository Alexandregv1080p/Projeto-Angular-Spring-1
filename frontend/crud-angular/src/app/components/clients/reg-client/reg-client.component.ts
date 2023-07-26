import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';


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
}
