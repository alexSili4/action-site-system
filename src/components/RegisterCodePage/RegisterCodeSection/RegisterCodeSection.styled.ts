import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme: { spacing } }) =>
      `${spacing(5)} ${spacing(4)} ${spacing(8)}`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ContentWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme: { spacing } }) =>
      `${spacing(10)} ${spacing(14)} ${spacing(12)}`};
  }
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 440px;
    margin-top: ${({ theme }) => theme.spacing(40)};
  }
`;
