import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    z-index: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`;

export const LoginContainer = styled.div`
  z-index: 1;
  width: 30vw;
  height: 50vh;
  padding: 1vw;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.53);
`;
