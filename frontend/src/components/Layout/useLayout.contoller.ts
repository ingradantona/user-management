import { useState } from 'react';
import { IconType } from 'react-icons';
import { BiSolidUser as UserIcon } from 'react-icons/bi';
import { BsPieChartFill as ReportIcon } from 'react-icons/bs';

export default function useLayoutContoller() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  const routes: {
    name: string;
    icon: IconType;
    path: string;
    id: string;
  }[] = [
    {
      name: 'Gestão de Usuários',
      icon: UserIcon,
      path: '/users',
      id: 'users',
    },
    {
      name: 'Dashboard',
      icon: ReportIcon,
      path: '/report',
      id: 'report',
    },
  ];

  return {
    isOpen,
    toggleSidebar,
    routes,
  };
}
