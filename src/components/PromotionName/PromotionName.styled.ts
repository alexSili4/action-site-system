import styled from '@emotion/styled';

export const Name = styled.p`
  max-width: 500px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 56px;
  }
`;
