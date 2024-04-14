import { Dispatch, SetStateAction } from 'react';

export interface IAuthProvider {
  children: JSX.Element;
}

export interface IAuthContext {
  userName?: string | null;
  profile?: string | null;
  userSurname?: string | null;
  handleLogout: () => void;
  handleLogin: (userEmail: string, userPassword: string) => void;
}
