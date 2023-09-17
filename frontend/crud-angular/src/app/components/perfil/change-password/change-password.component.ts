import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/model/UserDetails';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit{

  userProfile: UserDetails | any
  hide = true; 

  constructor(private perfilService: PerfilService,private router:Router ){}

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
  cancel(){

  }
  updPassword(){

  }
}
