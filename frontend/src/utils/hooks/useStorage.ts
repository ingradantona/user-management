import { jwtDecode } from 'jwt-decode';
import { IAccessToken } from '../interface/auth.interface';

export function getDecodedTokenLocalStorage(): IAccessToken | null {
  return jwtDecode(localStorage.getItem('acc_token') || '');
}

export function getTokenLocalStorage() {
  const json = localStorage.getItem('acc_token');

  if (!json) {
    return null;
  }

  const token = json;

  return token ?? null;
}
