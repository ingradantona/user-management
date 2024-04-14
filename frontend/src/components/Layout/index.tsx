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
import { AccessProfile } from '../../utils/enums/profile.enum';

export function Layout({ children }: LayoutProps) {
  const { isOpen, toggleSidebar, routes, userName, userSurname, profile } = useLayoutContoller();

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
          {routes.map((route) => {
            if (profile === route.permission || profile === AccessProfile.ADMIN)
              return (
                <NavLink
                  to={route.path}
                  className={({ isActive }) => (isActive ? 'link active' : 'link')}
                >
                  {route.icon({})}
                  {isOpen && <AnimationText>{route.name}</AnimationText>}
                </NavLink>
              );
          })}
        </RoutesContainer>
        <Divider />
        <LogoutContainer>
          <Avatar className="avatar" />
          {isOpen && (
            <div>
              <AnimationText>
                {userName} {userSurname}
              </AnimationText>
              <AnimationText>{profile}</AnimationText>
            </div>
          )}
        </LogoutContainer>
      </Menu>
      <Content>{children}</Content>
    </Page>
  );
}
