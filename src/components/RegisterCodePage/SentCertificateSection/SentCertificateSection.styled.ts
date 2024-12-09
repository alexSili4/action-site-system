import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(9)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    flex-direction: column;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme: { spacing } }) =>
      `${spacing(5)} ${spacing(4)} ${spacing(8)}`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ContentWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const SentCertificateFormWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(5)} ${spacing(7)} ${spacing(6)}`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(10)} ${spacing(14)} ${spacing(41)}`};
  }
`;
