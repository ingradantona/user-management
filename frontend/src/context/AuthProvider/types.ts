export interface IAuthProvider {
  children: JSX.Element;
}

export interface IAuthContext {
  userId?: number;
  userName: string;
  userEmail: string;
  profile: string;
  userSurname: string;
  handleLogout: () => void;
  handleLogin: (userEmail: string, userPassword: string) => void;
}
