import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
export const PaginationBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.2rem;
`;

export const NavigatorButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 0.1rem;
  border-radius: 50%;
  transition: background-color 0.4s ease;

  & svg {
    height: 2vh;
    width: 2vh;
    color: ${({ theme }) => theme.colors.typography.basic};
  }
`;

export const CurrentPage = styled.div`
  color: ${({ theme }) => theme.colors.typography.basic};
  padding: 1vw 1vw;
  border-radius: 5px;
  font-size: clamp(0.3rem, 0.15rem + 1.5vh, 3rem);
  font-family: 'Figtree 500', sans-serif;

  &.actual-page {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.background.secondary};

    width: 1.5vw;
    height: 1.5vw;
  }
`;
