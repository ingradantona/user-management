import { Background, LoginContainer } from './styles';
import Bg from '../../assets/images/gradient_bg.png';
import smallLogo from '../../assets/images/logo.svg';
import { Header1 } from '../../assets/styles/typography';
import { FormContainer, InLineContainerCenter } from '../../assets/styles/shared';
import { DefaultInput } from '../../components/Input/DefaultInput';
import UseLoginController from './useLogin.conroller';
import { ButtonMain } from '../../components/Button/ButtonMain';
import { ToastContainer } from '../../components/TostContainer';

export function Login() {
  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    handleSubmit,
    handleShowPassword,
    showPassword,
    isLoading,
  } = UseLoginController();

  return (
    <Background>
      <ToastContainer />
      <img src={Bg} />
      <LoginContainer>
        <InLineContainerCenter>
          <img src={smallLogo} />
          <Header1>Users.co</Header1>
        </InLineContainerCenter>
        <FormContainer onSubmit={handleSubmit}>
          <DefaultInput
            label="E-mail"
            placeholder="Insia seu e-mail"
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <DefaultInput
            label="Senha"
            placeholder="Insia seu e-mail"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            showPassword={showPassword}
            toggleShowPassword={handleShowPassword}
          />
          <ButtonMain label="Entrar" type="submit" isLoading={isLoading} />
        </FormContainer>
      </LoginContainer>
    </Background>
  );
}
