import styled from '@emotion/styled';

export const StyledSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing(12)};
  padding-bottom: ${({ theme }) => theme.spacing(14)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(23)};
  }
`;
