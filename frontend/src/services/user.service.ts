import { AxiosResponse } from 'axios';
import api from './api.service';
import {
  ICreateUser,
  IUser,
  IUserFilter,
  IUsersResponse,
  IProfile,
  IUpdateUser,
  IUserChartResponse,
} from '../utils/interface/user.interface';

export async function getAllUsersService({
  page,
  search,
  user_status,
}: IUserFilter): Promise<AxiosResponse<IUsersResponse>> {
  const params = new URLSearchParams();

  params.append('page', page.toString());
  if (search.length > 0) params.append('search', search);
  params.append('limit', '10');
  params.append('user_status', String(user_status));

  return await api.get('/user', { params });
}

export async function changeUserStatus(id: number): Promise<AxiosResponse<IUser>> {
  return await api.patch(`/user/status/${id}`);
}

export async function createUser(payload: ICreateUser): Promise<AxiosResponse<IUser>> {
  return await api.post(`/user`, payload);
}

export async function getProfiles(): Promise<AxiosResponse<IProfile[]>> {
  return await api.get(`/user/profiles`);
}

export async function updateUser(
  payload: IUpdateUser,
  id?: number | null,
): Promise<AxiosResponse<IUser>> {
  return await api.put(`/user/${id}`, payload);
}

export async function getChartData(id?: number): Promise<AxiosResponse<IUserChartResponse>> {
  const params = new URLSearchParams();

  if (id) params.append('profile_id', String(id));

  return await api.get('/user/chart', { params });
}
