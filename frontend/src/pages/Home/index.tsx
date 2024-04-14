import { BasePageContainer } from '../../assets/styles/shared';
import { Body2, Header2 } from '../../assets/styles/typography';
import HomeIcon from '../../assets/images/home_icon.svg';
import useHomeController from './useHome.controller';
import { ContentContainer } from './styles';

export function Home() {
  const { userName, userSurname } = useHomeController();
  return (
    <>
      <Header2>Home</Header2>
      <BasePageContainer>
        <ContentContainer>
          <img src={HomeIcon} />
          <Header2>
            Bem vindo(a)! {userName} {userSurname}
          </Header2>
          <Body2>Ferramenta de gerênciamentos de usuários da Users.co</Body2>
        </ContentContainer>
      </BasePageContainer>
    </>
  );
}
