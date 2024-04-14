import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UseNewUserController() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [userSurname, setUserSurname] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = userName && userSurname && userEmail && userPassword;

  function handleShowPassword() {
    setShowPassword(!showPassword);
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
  };
}
