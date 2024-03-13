import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [
  ]
})
export class SigninComponent {

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(signinForm: any) {
    console.log(signinForm.value);

    if( this.authService.login(signinForm.value.email, signinForm.value.password)) {
      this.router.navigate(['/products']);
    } else {
      console.log('Login failed');
      signinForm.reset();
    }

  }

}
