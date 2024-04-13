import { useState } from 'react';
import { LayoutProps } from './types';
import { Content, LogoButton, LogoTitle, Menu, Page } from './styles';
import smallLogo from '../../assets/images/logo.svg';

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <Page>
      <Menu isOpen={isOpen}>
        <LogoButton onClick={toggleSidebar}>
          <img src={smallLogo} />
          {isOpen && <LogoTitle>Users.co</LogoTitle>}
        </LogoButton>
      </Menu>
      <Content>{children}</Content>
    </Page>
  );
}
