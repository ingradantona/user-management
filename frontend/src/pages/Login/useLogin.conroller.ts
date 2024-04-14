import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export default function UseLoginController() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleLogin } = useContext(AuthContext);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await handleLogin(userEmail, userPassword);
    setIsLoading(false);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return {
    userEmail,
    setUserEmail,
    setUserPassword,
    userPassword,
    handleSubmit,
    showPassword,
    handleShowPassword,
    isLoading,
  };
}
