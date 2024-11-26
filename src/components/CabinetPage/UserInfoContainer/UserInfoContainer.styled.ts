import styled from '@emotion/styled';

export const Container = styled.div`
  flex-shrink: 0;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(3)} ${spacing(4)} ${spacing(10)}`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: 16px;
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
  }
`;

export const ContentWrap = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(10)};
    height: 100%;
  }
`;
