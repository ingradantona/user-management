import { jwtDecode } from 'jwt-decode';
import { IAccessToken } from '../interface/auth.interface';

export function getDecodedTokenLocalStorage(): IAccessToken | undefined {
  try {
    return jwtDecode(localStorage.getItem('acc_token') || '');
  } catch (error) {}
}

export function getTokenLocalStorage() {
  const json = localStorage.getItem('acc_token');

  if (!json) {
    return null;
  }

  const token = json;

  return token ?? null;
}

export function setTokenLocalStorage(token: string) {
  localStorage.setItem('acc_token', token);
}
