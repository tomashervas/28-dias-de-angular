import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isAuthenticated = false;
  username = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated.asObservable().subscribe(
      (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      })

    this.authService.user.asObservable().subscribe(
      (user) => {
        this.username = user;
      })
  }


  onLogout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
