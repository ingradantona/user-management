import {
  BasePageContainer,
  FormContainer,
  InLineContainerCenter,
} from '../../../assets/styles/shared';
import { Header2 } from '../../../assets/styles/typography';
import { ButtonMain } from '../../../components/Button/ButtonMain';
import { DefaultInput } from '../../../components/Input/DefaultInput';
import UseUpdateUserController from './useUpdateUserCrontroller';

export function UpdateUser() {
  const {
    isFormValid,
    setUserEmail,
    setUserName,
    setUserSurname,
    userEmail,
    userName,
    userSurname,
    handleSubmit,
    isLoading,
    goToUserGuide,
  } = UseUpdateUserController();

  return (
    <>
      <Header2>Edição de Usuário</Header2>
      <BasePageContainer>
        <FormContainer onSubmit={handleSubmit}>
          <DefaultInput
            label="Nome"
            placeholder="Insia o nome do usuário"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <DefaultInput
            label="Sobrenome"
            placeholder="Insia o sobrenome do usuário"
            value={userSurname}
            onChange={(e) => setUserSurname(e.target.value)}
          />
          <DefaultInput
            label="E-mail"
            placeholder="Insia o e-mail do usuário"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <InLineContainerCenter>
            <ButtonMain
              label="Atualizar"
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
