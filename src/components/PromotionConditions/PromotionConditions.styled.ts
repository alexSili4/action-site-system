import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(12)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;
