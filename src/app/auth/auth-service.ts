import { Injectable, inject } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private oidc = inject(OidcSecurityService);

  login(): void {
    this.oidc.authorize();
  }

  logout(): void {
    console.log('Logging out user');
    this.oidc.logoff();
  }

  initAuth(): Observable<LoginResponse> {
    return this.oidc.checkAuth();
  }

  readonly authState$ = this.oidc.isAuthenticated$;

  readonly isLoggedIn$ = this.authState$.pipe(
    map((s) => s.isAuthenticated),
    distinctUntilChanged()
  );

  getAccessToken(): Observable<string> {
    const token = this.oidc.getAccessToken();
    return token;
  }
}
