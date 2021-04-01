export interface UserCredentials {
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
}

export interface User {
  username?: string;
  email: string;
  accessToken: string;
}
