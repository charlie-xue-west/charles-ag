import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../auth/auth-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-auth-form',
  imports: [MatButtonModule, MatCardModule, AsyncPipe],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {
  private authService = inject(AuthService);
  readonly isLoggedIn$ = this.authService.isLoggedIn$;

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
