import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name!: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.getProfileData()
  }
  getProfileData() {
    const response = this.authService.getProfile()
    if (!response) {
      this.router.navigate(['sign-in']);

    }
    this.name = response.name;
  }
}
