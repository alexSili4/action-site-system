import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(12)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.spacing(14)};
  }
`;
