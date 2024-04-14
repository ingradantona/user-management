import { AxiosResponse } from 'axios';
import { IUserLogin, IUserLoginResponse } from '../utils/interface/auth.interface';
import api from './api.service';

export async function loginService(user: IUserLogin): Promise<AxiosResponse<IUserLoginResponse>> {
  return await api.post('/auth/login', user);
}
