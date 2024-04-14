import { Background, LoginContainer } from './styles';
import Bg from '../../assets/images/gradient_bg.png';
import smallLogo from '../../assets/images/logo.svg';
import { Header1 } from '../../assets/styles/typography';
import { FormContainer, InLineContainerCenter } from '../../assets/styles/shared';
import { DefaultInput } from '../../components/Input/DefaultInput';
import UseLoginController from './useLogin.conroller';
import { ButtonMain } from '../../components/Button/ButtonMain';

export function Login() {
  const { email, setEmail } = UseLoginController();

  return (
    <Background>
      <img src={Bg} />
      <LoginContainer>
        <InLineContainerCenter>
          <img src={smallLogo} />
          <Header1>Users.co</Header1>
        </InLineContainerCenter>
        <FormContainer>
          <DefaultInput
            label="E-mail"
            placeholder="Insia seu e-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <DefaultInput label="Senha" placeholder="Insia seu e-mail" type="password" />
          <ButtonMain label="Entrar" />
        </FormContainer>
      </LoginContainer>
    </Background>
  );
}
