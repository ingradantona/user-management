import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../services/user.service';
import { CustomAxiosError } from '../../../utils/interface/error.interface';
import toast from 'react-hot-toast';

export default function UseUpdateUserController() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>('');
  const [userSurname, setUserSurname] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(2);

  const isFormValid = userName && userSurname && userEmail;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await updateUser(
        {
          user_email: userEmail,
          user_name: userName,
          user_surname: userSurname,
        },
        userId,
      );
      await navigate('/users');
      toast.success('Usuário atualizado com sucesso');
    } catch (error) {
      const err = error as CustomAxiosError;
      toast.dismiss();
      toast.error(err.response?.data.message || 'Erro ao tentar cadastrar');
    } finally {
      setIsLoading(false);
    }
  }

  function goToUserGuide() {
    navigate('/users');
  }

  return {
    isFormValid,
    userName,
    setUserName,
    userSurname,
    setUserSurname,
    userEmail,
    setUserEmail,
    handleSubmit,
    isLoading,
    goToUserGuide,
  };
}
