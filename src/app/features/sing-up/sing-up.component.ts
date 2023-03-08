import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  signUpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authService: AuthenticationService, private router: Router) { }

  onSubmit(): void {
    const request = { email: this.signUpForm.value.email || '', name: this.signUpForm.value.name || '' }
    debugger
    this.authService.signUp(request).subscribe((response) => {
      if (response) {
        this.router.navigate(['profile']);
      }
    })
  }
}
