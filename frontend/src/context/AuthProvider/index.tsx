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

  const [userId, setUserId] = useState<number>();
  const [userName, setUserName] = useState<string>('');
  const [userSurname, setUserSurname] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [profile, setProfile] = useState<string>('');

  const tokenByLocalStorage: string | null = getTokenLocalStorage();

  useEffect(() => {
    const decodedToken = getDecodedTokenLocalStorage();

    if (decodedToken) {
      setUserId(decodedToken.user_id);
      setUserName(decodedToken.user_name);
      setProfile(decodedToken.profile_name);
      setUserSurname(decodedToken.user_surname);
      setUserEmail(decodedToken.user_email);
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
        userId,
        userName,
        userSurname,
        userEmail,
        profile,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
