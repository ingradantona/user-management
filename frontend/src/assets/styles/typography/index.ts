import styled, { css } from 'styled-components';

interface ITypography {
  $fontColor?: string;
}

export const Header1 = styled.h1<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: 3.7vh;
    font-family: 'Poppins Bold';
    text-wrap: no-wrap;
    color: ${$fontColor ? $fontColor : theme.colors.typography.title};
  `}
`;

export const Header2 = styled.h2<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: 3vh;
    font-family: 'Poppins Bold';
    color: ${$fontColor ? $fontColor : theme.colors.typography.title};
  `}
`;

export const Body1 = styled.p<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: 1.8vh;
    font-family: 'Poppins';
    color: ${$fontColor ? $fontColor : theme.colors.typography.basic};
  `}
`;

export const Body2 = styled.p<ITypography>`
  ${({ theme, $fontColor }) => css`
    font-size: 2%.2;
    font-family: 'Poppins Medium';
    color: ${$fontColor ? $fontColor : theme.colors.typography.emphasys};
  `}
`;
