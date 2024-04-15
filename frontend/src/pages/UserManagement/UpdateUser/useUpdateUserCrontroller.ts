import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../services/user.service';
import { CustomAxiosError } from '../../../utils/interface/error.interface';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

export default function UseUpdateUserController() {
  const navigate = useNavigate();

  const { userId, userName, userSurname, userEmail } = useContext(AuthContext);

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = userName && userSurname && userEmail;

  useEffect(() => {
    setName(userName);
    setSurname(userSurname);
    setEmail(userEmail);
  }, [userEmail, userName, userSurname]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (name && surname && email) {
        setIsLoading(true);
        await updateUser(
          {
            user_email: email,
            user_name: name,
            user_surname: surname,
          },
          userId,
        );
        await navigate('/users');
        toast.success('Usuário atualizado com sucesso');
      }
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
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    handleSubmit,
    isLoading,
    goToUserGuide,
  };
}
