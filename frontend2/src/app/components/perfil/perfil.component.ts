import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/model/UserDetails';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  isFormEditable: boolean = false;

  userProfile: UserDetails | any

  constructor(private perfilService: PerfilService ){}

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
  toggleEditState() {
    this.isFormEditable = !this.isFormEditable;
  }
  updProfile(){
    this.perfilService.updateProfile(this.userProfile).subscribe(()=>{
      this.perfilService.showMensage("Usuario atualizado com sucesso!")
      this.isFormEditable = false;
    });
  }
}
