export interface IAccessToken {
  user_id: number;
  user_email: string;
  user_name: string;
  user_surname: string;
  profile_name: string;
  iat?: number;
  exp?: number;
}

export interface IUserLogin {
  user_email: string;
  user_password: string;
}

export interface IUserLoginResponse {
  user_name: string;
  user_surname: string;
  user_email: string;
  access_token: string;
  refresh_token: string;
}
