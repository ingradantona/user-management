import {
  BasePageContainer,
  FormContainer,
  InLineContainerCenter,
} from '../../../assets/styles/shared';
import { Header2 } from '../../../assets/styles/typography';
import { ButtonMain } from '../../../components/Button/ButtonMain';
import { DefaultInput } from '../../../components/Input/DefaultInput';
import { Select } from '../../../components/Input/Select';
import UseNewUserController from './useNewUser.controller';

export function NewUser() {
  const {
    isFormValid,
    handleShowPassword,
    showPassword,
    setUserEmail,
    setUserName,
    setUserPassword,
    setUserSurname,
    userEmail,
    userName,
    userPassword,
    userSurname,
    handleSubmit,
    isLoading,
    userProfile,
    options,
    setUserProfile,
    goToUserGuide,
  } = UseNewUserController();

  return (
    <>
      <Header2>Criação de Usuário</Header2>
      <BasePageContainer>
        <FormContainer onSubmit={handleSubmit}>
          <DefaultInput
            label="Nome"
            placeholder="Insira o nome do usuário"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <DefaultInput
            label="Sobrenome"
            placeholder="Insira o sobrenome do usuário"
            value={userSurname}
            onChange={(e) => setUserSurname(e.target.value)}
          />
          <DefaultInput
            label="E-mail"
            placeholder="Insira o e-mail do usuário"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <DefaultInput
            label="Senha"
            placeholder="Insira a senha do usuário"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            showPassword={showPassword}
            toggleShowPassword={handleShowPassword}
          />
          <Select
            label="Perfil"
            placeholder="Escolha o perfil do usuário"
            value={userProfile}
            values={options}
            onChangeValue={(value) => setUserProfile(value)}
          />
          <InLineContainerCenter>
            <ButtonMain
              label="Cadastrar"
              type="submit"
              disabled={!isFormValid}
              isLoading={isLoading}
            />
            <ButtonMain
              $secondaryStyle
              label="Cancelar"
              isLoading={isLoading}
              onClick={goToUserGuide}
            />
          </InLineContainerCenter>
        </FormContainer>
      </BasePageContainer>
    </>
  );
}
