import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export default function useHomeController() {
  const { userName, userSurname } = useContext(AuthContext);

  return { userName, userSurname };
}
