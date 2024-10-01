import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const BannerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 495px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  border-radius: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 600px;
    padding: ${({ theme }) =>
      `${theme.spacing(12)} ${theme.spacing(14)} ${theme.spacing(18)}`};
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  width: 100%;
  max-width: 500px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 56px;
  }
`;
