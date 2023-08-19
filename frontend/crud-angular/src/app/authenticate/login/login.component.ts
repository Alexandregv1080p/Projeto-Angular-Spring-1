import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true; 
  loginForm: FormGroup;
  sessionId: any = ''
  email = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private formBuilder: FormBuilder, private authService: LoginService,private router:Router ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      console.log(this.loginForm.value);
      this.authService.login(email, password).subscribe(
        response => {
          if (response) {
            this.sessionId = response.sessionId;
            sessionStorage.setItem('token', this.sessionId);
            console.log(this.loginForm.value);
            this.router.navigate(['/home']);
          }
          this.authService.getAuthenticatedResource().subscribe(
            data => {
              console.log('Authenticated Data:', data);
            },
            error => {
              console.error('Error fetching authenticated resource:', error);
            }
          );
        },
        error => {
          this.authService.showMensage("Email ou senha incorretos!");
        }
      );
    }
  }
}
