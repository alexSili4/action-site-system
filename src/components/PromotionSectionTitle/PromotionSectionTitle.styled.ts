import styled from '@emotion/styled';

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 32px;
  }
`;
