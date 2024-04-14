import { createContext, useEffect, useState } from 'react';
import { IAuthContext, IAuthProvider } from './types';
import { IUserLogin } from '../../utils/interface/auth.interface';
import { loginService } from '../../services/auth.service';
import { CustomAxiosError } from '../../utils/interface/error.interface';
import {
  getDecodedTokenLocalStorage,
  getTokenLocalStorage,
  setTokenLocalStorage,
} from '../../utils/hooks/useStorage';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string | null>(null);
  const [userSurname, setUserSurname] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | null>(null);

  const tokenByLocalStorage: string | null = getTokenLocalStorage();

  useEffect(() => {
    const decodedToken = getDecodedTokenLocalStorage();

    if (decodedToken) {
      setUserName(decodedToken.user_name);
      setProfile(decodedToken.profile_name);
      setUserSurname(decodedToken.user_surname);
    }
  }, [tokenByLocalStorage]);

  async function handleLogin(userEmail: string, userPassword: string) {
    const body: IUserLogin = {
      user_email: userEmail,
      user_password: userPassword,
    };

    await loginService(body)
      .then((response) => {
        setTokenLocalStorage(response.data.access_token);

        navigate('/home');
      })
      .catch((error: CustomAxiosError) => {
        toast.dismiss();
        toast.error(error.response?.data.message || 'Erro ao tentar fazer login');
      });
  }

  async function handleLogout() {
    localStorage.clear();
    await navigate('login');
    toast.success('Você saiu da aplicação!');
  }

  return (
    <AuthContext.Provider
      value={{
        userName,
        userSurname,
        profile,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
