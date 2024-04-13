export interface IAccessToken {
  user_id: number;
  user_email: string;
  user_name: string;
  profile_name: string;
  iat?: number;
  exp?: number;
}
