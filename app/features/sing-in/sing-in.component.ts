import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authService: AuthenticationService, private router: Router) {

  }

  onSubmit() {
    const request = { username: this.signInForm.value.username || '' }

    return this.authService.signIn(request).subscribe((response) => {

      if (response) {
        this.router.navigate(['profile'])
      }

    })
  }
}
