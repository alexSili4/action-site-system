import styled from '@emotion/styled';

export const StyledSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing(29)};
  padding-bottom: ${({ theme }) => theme.spacing(23)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(32)};
    padding-bottom: ${({ theme }) => theme.spacing(28)};
  }
`;
