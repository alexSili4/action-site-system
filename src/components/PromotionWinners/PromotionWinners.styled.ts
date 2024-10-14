import styled from '@emotion/styled';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
  }
`;

export const ContentWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(14)};
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;
