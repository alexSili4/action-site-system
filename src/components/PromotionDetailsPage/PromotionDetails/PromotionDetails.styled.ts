import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing(20.5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(25)};
  }
`;

export const Content = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  overflow-x: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(8)};
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;
