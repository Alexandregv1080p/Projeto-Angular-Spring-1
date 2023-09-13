import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PerfilService } from 'src/app/services/perfil.service';
import { UserDetails } from 'src/app/model/UserDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ] 
})
export class DashboardComponent implements OnInit {
  
  userProfile: UserDetails | any


  opened=false;
  iconState = 'default';

  constructor(private perfilService: PerfilService){}

  toggleIcon() {
    this.opened = !this.opened;
    this.iconState = this.opened ? 'rotated' : 'default';

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
}
