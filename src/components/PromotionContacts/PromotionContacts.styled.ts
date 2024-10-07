import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(29)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(40)};
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
