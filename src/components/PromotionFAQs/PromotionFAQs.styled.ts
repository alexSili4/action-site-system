import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing(23)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(22)};
  }
`;

export const ContentWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 848px;
    margin-top: ${({ theme }) => theme.spacing(14)};
    margin-left: auto;
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
