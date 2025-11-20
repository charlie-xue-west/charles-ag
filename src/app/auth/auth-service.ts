import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oidc: OidcSecurityService) {}

  login() {
    this.oidc.authorize();
  }

  logout() {
    this.oidc.logoff();
  }

  get isAuthenticated$() {
    return this.oidc.isAuthenticated$;
  }
}
