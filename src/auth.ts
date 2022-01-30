import { OktaAuth } from '@okta/okta-auth-js'

console.log({
  domain: process.env.VUE_APP_OKTA_DOMAIN,
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  baseUrl: window.location.origin + '/login/callback',
})

export const oktaAuth = new OktaAuth({
  issuer: `https://${process.env.VUE_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: `${process.env.VUE_APP_OKTA_CLIENT_ID}`,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
})
