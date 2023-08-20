import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true; 
  email = new FormControl('', [Validators.required, Validators.email]);
  registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router:Router, private registerService: RegisterService ) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const firstname = this.registerForm.value.firstname;
      const lastname = this.registerForm.value.lastname;
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;      
      this.registerService.register(firstname,lastname,email, password).subscribe(() =>this.router.navigate(['/login']));
    }
  }
}
