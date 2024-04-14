import styled from 'styled-components';

interface IContainer {
  size?: string;
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  width: ${({ size }) => (size ? size : '100%')};
  min-width: 100px;
  height: 5.5vh;
  padding: 0 1vw;
  border-radius: 10px;
  outline: 1.5px solid ${({ theme }) => theme.colors.background.border};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  transition: all 0.2s ease-in;

  input::placeholder {
    color: ${({ theme }) => theme.colors.typography.basic};
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    transition: 'all 0.3s ease-in-out';
    cursor: pointer;
  }

  & input {
    flex-grow: 1;
    background-color: transparent;
    width: 100%;
    border: none;
    margin-left: 0.5vw;
    height: 100%;
    font-size: clamp(0.15rem, 0.3rem + 1vh, 3rem);

    &:focus {
      outline: 0;
    }
  }

  & button {
    background-color: transparent;
    border: none;
    height: 100%;
  }
`;

export const IconBox = styled.div`
  height: 50%;
  display: flex;

  svg {
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors.typography.basic};
  }
`;
