import styled from '@emotion/styled';

export const Name = styled.p`
  max-width: 400px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 44px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 500px;
    font-size: 56px;
  }
`;
