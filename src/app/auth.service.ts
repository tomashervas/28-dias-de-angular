import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(true);
  user: Subject<string> = new Subject<string>();

  constructor() {}

  login( email: string, password: string) {
    if (email === 'test@test.com' && password === 'test') {
      this.isAuthenticated.next(true);
      this.user.next(email.split('@')[0]);
      return true;
    }
    this.isAuthenticated.next(false);
    return false;
  }

  logout() {
    return this.isAuthenticated.next(false);
  }


}
