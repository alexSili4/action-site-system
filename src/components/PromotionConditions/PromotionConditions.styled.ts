import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing(9)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(17)};
  }
`;
