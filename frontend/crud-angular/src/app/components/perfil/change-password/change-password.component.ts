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
  oldPassword: string = ''; 
  newPassword: string = '';  
  confirmPassword: string = '';  

  constructor(
    private perfilService: PerfilService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.perfilService.getUserProfile().subscribe(
      (userProfile) => {
        this.userProfile = userProfile;
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }

  cancel() {
    this.router.navigate(["perfil"])
  }

  changePassword() {
    const newPassword =  this.newPassword; 
    const oldPassword = this.oldPassword;
    this.perfilService.changePassword(newPassword, oldPassword).subscribe(
      () => {
        this.perfilService.showMensage("Senha alterada com sucesso!")
        this.router.navigate(["perfil"])
      },
      error => {
        this.perfilService.showMensage("Erro ao alterar senhar, senha atual não bate")
      }
    );
  }
}
