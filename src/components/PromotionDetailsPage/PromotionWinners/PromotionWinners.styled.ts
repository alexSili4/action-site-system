import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(12)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const ContentWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-right: ${({ theme }) => theme.spacing(5)};
    margin-top: ${({ theme }) => theme.spacing(14)};
  }
`;
