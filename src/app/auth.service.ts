import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  login( email: string, password: string) {
    if (email === 'test@test.com' && password === 'test') {
      this.isAuthenticated.next(true);
      return true;
    }
    this.isAuthenticated.next(false);
    return false;
  }

  logout() {
    return this.isAuthenticated.next(false);
  }


}
