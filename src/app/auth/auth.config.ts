import { PassedInitialConfig } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'http://localhost:8080/realms/shadow-realm',
    redirectUrl: environment.appUrl,
    postLogoutRedirectUri: environment.appUrl,
    clientId: 'charles-ag',
    scope: 'oppenid profile email', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
  },
};
