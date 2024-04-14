import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../services/user.service';
import { CustomAxiosError } from '../../../utils/interface/error.interface';
import toast from 'react-hot-toast';

export default function UseNewUserController() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>('');
  const [userSurname, setUserSurname] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = userName && userSurname && userEmail && userPassword;

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await createUser({
        profile: 1,
        user_email: userEmail,
        user_name: userName,
        user_surname: userSurname,
        user_password: userPassword,
      });
    } catch (error) {
      const err = error as CustomAxiosError;
      toast.dismiss();
      toast.error(err.response?.data.message || 'Erro ao tentar fazer login');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isFormValid,
    handleShowPassword,
    showPassword,
    userName,
    setUserName,
    userSurname,
    setUserSurname,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    handleSubmit,
  };
}
