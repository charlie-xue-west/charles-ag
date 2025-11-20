import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-auth-form',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {
  private authService = inject(AuthService);

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
