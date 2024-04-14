import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, getProfiles } from '../../../services/user.service';
import { CustomAxiosError } from '../../../utils/interface/error.interface';
import toast from 'react-hot-toast';
import { ISelectCurrentValue, Option } from '../../../components/Input/Select/types';
import { useQuery } from 'react-query';

export default function UseNewUserController() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>('');
  const [userSurname, setUserSurname] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userProfile, setUserProfile] = useState<ISelectCurrentValue | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);

  const isFormValid = userProfile && userName && userSurname && userEmail && userPassword;

  useQuery(['profiles'], () => getProfiles(), {
    onSuccess: (dataSuccess) => {
      const data: Option[] = dataSuccess.data.map((item) => ({
        id: item.profile_id,
        value: item.profile_name,
      }));

      setOptions(data);
    },
  });

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await createUser({
        profile_id: userProfile?.id,
        user_email: userEmail,
        user_name: userName,
        user_surname: userSurname,
        user_password: userPassword,
      });

      await navigate('/users');
      toast.success('Usuário cadastrado com sucesso');
    } catch (error) {
      const err = error as CustomAxiosError;
      toast.dismiss();
      toast.error(err.response?.data.message || 'Erro ao tentar cadastrar');
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
    isLoading,
    userProfile,
    setUserProfile,
    options,
  };
}
