import { Background, LoginContainer } from './styles';
import Bg from '../../assets/images/gradient_bg.png';
import smallLogo from '../../assets/images/logo.svg';
import { Header1 } from '../../assets/styles/typography';
import { FormContainer, InLineContainerCenter } from '../../assets/styles/shared';

export function Login() {
  return (
    <Background>
      <img src={Bg} />
      <LoginContainer>
        <InLineContainerCenter>
          <img src={smallLogo} />
          <Header1>Users.co</Header1>
        </InLineContainerCenter>
        <FormContainer></FormContainer>
      </LoginContainer>
    </Background>
  );
}
