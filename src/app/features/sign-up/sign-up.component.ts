import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authService: AuthenticationService, private router: Router) { }

  onSubmit(): void {
    const request = { email: this.signUpForm.value.email || '', name: this.signUpForm.value.name || '' }

    this.authService.signUp(request).subscribe((response) => {
      if (response) {
        this.router.navigate(['profile']);
      }
    })
  }
}
