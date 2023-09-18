import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/model/UserDetails';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  userProfile: UserDetails | any;
  hide = true;
  passwordForm: FormGroup;
  profilePass!: string;

  constructor(
    private perfilService: PerfilService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.perfilService.getUserProfile().subscribe(
      (userProfile) => {
        this.userProfile = userProfile;
        console.log(userProfile.password)
        this.profilePass = this.userProfile.password
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }

  cancel() {
    this.router.navigate(["perfil"])
  }

  updPassword() {
    const currentPassword = this.passwordForm.get('currentPassword')?.value;
    const newPassword = this.passwordForm.get('newPassword')?.value;
    const confirmPassword = this.passwordForm.get('confirmPassword')?.value;

    console.log(this.profilePass)
    if (currentPassword === this.profilePass) {
      console.log('Senha atual está correta');
      console.log('Nova Senha:', newPassword);
      console.log('Confirmar Nova Senha:', confirmPassword);
      
      // Verifique se a nova senha e a confirmação coincidem
      if (newPassword === confirmPassword) {
        console.log('Senhas coincidem. Atualizando senha...');
      } else {
        console.log('As senhas não coincidem. Por favor, verifique.');
      }
    } else {
      console.log('Senha atual incorreta. Por favor, verifique.');
    }
  }
  
}
