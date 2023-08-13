import {Component} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { catchError, tap } from 'rxjs';
import { EmailserviceService } from 'src/app/services/emailservice.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required, Validators.min(3)]);
  lastNameFormControl = new FormControl('', [Validators.required,Validators.min(3)]);
  matcher = new MyErrorStateMatcher();

  emailData: any = {
    name: '',
    lastname: '',
    email: '',
    telephone: '',
    description: ''
  };

  constructor(private emailService: EmailserviceService) {}

  sendEmail() {
    this.emailService.sendEmail(this.emailData)
    .subscribe(
      response => {
        console.log('Server response:', response);
        if (response === 'Email sent ') {
          console.log('Email sent successfully');
          this.clearForm();
        }
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
  }

  clearForm() {
    this.emailData = {
      name: '',
      lastname: '',
      email: '',
      telephone: '',
      description: ''
    };
  }
}
