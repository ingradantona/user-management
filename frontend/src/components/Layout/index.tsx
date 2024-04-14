import { LayoutProps } from './types';
import {
  Content,
  Divider,
  LinkName,
  LogoButton,
  LogoTitle,
  Menu,
  Page,
  RoutesContainer,
} from './styles';
import smallLogo from '../../assets/images/logo.svg';
import useLayoutContoller from './useLayout.contoller';
import { NavLink } from 'react-router-dom';

export function Layout({ children }: LayoutProps) {
  const { isOpen, toggleSidebar, routes } = useLayoutContoller();

  return (
    <Page>
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
              {isOpen && <LinkName>{route.name}</LinkName>}
            </NavLink>
          ))}
        </RoutesContainer>
      </Menu>
      <Content>{children}</Content>
    </Page>
  );
}
