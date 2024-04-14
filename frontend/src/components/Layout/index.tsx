import { LayoutProps } from './types';
import {
  AnimationText,
  Content,
  Divider,
  LogoButton,
  LogoTitle,
  LogoutContainer,
  Menu,
  Page,
  RoutesContainer,
} from './styles';
import smallLogo from '../../assets/images/logo.svg';
import useLayoutContoller from './useLayout.contoller';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar';
import { ToastContainer } from '../TostContainer';

export function Layout({ children }: LayoutProps) {
  const { isOpen, toggleSidebar, routes } = useLayoutContoller();

  return (
    <Page>
      <ToastContainer />
      <Menu $isOpen={isOpen}>
        <LogoButton onClick={toggleSidebar}>
          <img src={smallLogo} />
          {isOpen && <LogoTitle>Users.co</LogoTitle>}
        </LogoButton>
        <Divider />
        <RoutesContainer>
          {routes.map((route) => (
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              {route.icon({})}
              {isOpen && <AnimationText>{route.name}</AnimationText>}
            </NavLink>
          ))}
        </RoutesContainer>
        <Divider />
        <LogoutContainer>
          <Avatar className="avatar" />
          {isOpen && <AnimationText>Ingra Souza</AnimationText>}
        </LogoutContainer>
      </Menu>
      <Content>{children}</Content>
    </Page>
  );
}
