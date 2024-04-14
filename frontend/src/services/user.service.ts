import { AxiosResponse } from 'axios';
import api from './api.service';
import { IUser, IUserFilter, IUsersResponse } from '../utils/interface/user.interface';

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
