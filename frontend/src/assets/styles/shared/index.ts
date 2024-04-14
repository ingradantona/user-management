import styled, { useTheme } from 'styled-components';

export const InLineContainerCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;

export const InLineContainerBetween = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

export const BasePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw;
  justify-content: space-between;
  flex-grow: 1;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px #00000015;
  border-radius: 10px;
`;

export function InputTheme() {
  const { colors: theme } = useTheme();

  return {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      fontSize: '1.8vh',
      fontFamily: 'Poppins',
      '& input': {
        borderRadius: '10px !important',
      },
      '& fieldset': {
        borderWidth: '1px !important',
        borderRadius: '10px !important',
        borderColor: `${theme.background.border} !important`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `${theme.primary.main} !important`,
      },
      '&.Mui-disabled': {
        fieldset: {
          background: theme.background.secondary,
        },
      },
      '&.Mui-error': {
        fieldset: {
          borderColor: `${theme.danger} !important`,
        },
        input: {
          color: `${theme.danger} !important`,
        },
      },
      'input::placeholder': {
        fontFamily: 'Poppins',
        fontSize: '1.8vh',
        transition: 'all 0.3s ease-in-out',
      },
    },
    '&:hover': {
      fieldset: {
        borderColor: `${theme.primary.main} !important`,
      },
      'input::placeholder': {
        transition: 'color 0.3s ease-in-out',
      },
      '.Mui-disabled': {
        fieldset: {
          borderColor: `${theme.background.secondary} !important`,
        },
      },
    },
  };
}

export function LabelTheme() {
  const { colors: theme } = useTheme();

  return {
    color: theme.typography.emphasys,
    fontFamily: 'Poppins Medium',
    marginBottom: '1vh',
    fontSize: '2vh',
  };
}
