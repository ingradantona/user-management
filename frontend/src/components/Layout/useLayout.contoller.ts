import { useContext, useState } from 'react';
import { IconType } from 'react-icons';
import { BiSolidUser as UserIcon } from 'react-icons/bi';
import { BsPieChartFill as ReportIcon } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthProvider';
import { AccessProfile } from '../../utils/enums/profile.enum';

export default function useLayoutContoller() {
  const [isOpen, setIsOpen] = useState(false);

  const { userName, userSurname, profile } = useContext(AuthContext);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  const routes: {
    name: string;
    icon: IconType;
    path: string;
    id: string;
    permission: string;
  }[] = [
    {
      name: 'Gestão de Usuários',
      icon: UserIcon,
      path: '/users',
      id: 'users',
      permission: AccessProfile.COMMON,
    },
    {
      name: 'Dashboard',
      icon: ReportIcon,
      path: '/report',
      id: 'report',
      permission: AccessProfile.ADMIN,
    },
  ];

  return {
    isOpen,
    toggleSidebar,
    routes,
    userName,
    userSurname,
    profile,
  };
}
