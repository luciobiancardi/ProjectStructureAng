import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  profileData!: { email: string, name: string };

  constructor() { }

  signIn({ username }: { username: string }): Observable<boolean> {
    this.profileData = { email: '', name: username };
    return of(true);

  }

  signUp({ email, name }: { email: string, name: string }): Observable<boolean> {
    this.profileData = { email, name };

    return of(true);

  }

  getProfile(): { email: string, name: string } {
    return this.profileData;
  }
}  
