interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'hg4TU4TzZedCRjaGs9akcopD14AzgC03',
  domain: 'viaticando.auth0.com',
  callbackURL: 'http://viaticando.us-east-1.elasticbeanstalk.com/callback'
};