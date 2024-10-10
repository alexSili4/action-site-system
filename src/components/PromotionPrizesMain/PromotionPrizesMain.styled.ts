import styled from '@emotion/styled';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
  }
`;

export const BannerWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) =>
    `${theme.spacing(23)} ${theme.spacing(5)} ${theme.spacing(64)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(12)};
    padding: ${({ theme }) =>
      `${theme.spacing(60)} ${theme.spacing(10)} ${theme.spacing(12)}`};
  }
`;

export const BannerTitle = styled.p`
  width: 100%;
  max-width: 500px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.oswald};
  font-size: 37.88px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.5px;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 40px;
    line-height: 1.3;
    letter-spacing: 0px;
  }
`;
