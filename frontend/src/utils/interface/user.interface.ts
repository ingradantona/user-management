import { AccessProfile } from '../enums/profile.enum';

export interface IUser {
  user_id: number;
  user_name: string;
  user_surname: string;
  user_email: string;
  user_status: boolean;
  profile: IProfile;
}

export interface ICreateUser {
  user_name: string;
  user_surname: string;
  user_email: string;
  user_password: string;
  profile_id?: number;
}

export interface IUpdateUser {
  user_name: string;
  user_surname: string;
  user_email: string;
}

export interface IUsersResponse {
  items: IUser[];
  meta: {
    totalItems: Number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IUserTableRow {
  userId: number;
  userName: string;
  userSurname: string;
  userEmail: string;
  userProfile: string;
  userStatus: boolean;
}

export interface IProfile {
  profile_id: number;
  profile_name: AccessProfile.ADMIN | AccessProfile.COMMON;
}

export interface IUserFilter {
  page: number;
  search: string;
  user_status: boolean;
}

export interface IUserChartResponse {
  active: number;
  inactive: number;
}
