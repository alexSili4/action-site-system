import styled from '@emotion/styled';

export const Container = styled.div`
  flex-shrink: 0;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
    border-radius: 16px;
  }
`;

export const PrizeImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f6f9;
  padding-top: ${({ theme }) => theme.spacing(20)};
  padding-bottom: ${({ theme }) => theme.spacing(16)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    border-radius: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 100%;
    padding-top: ${({ theme }) => theme.spacing(35)};
    padding-bottom: ${({ theme }) => theme.spacing(25)};
  }
`;

export const PrizeImg = styled.img`
  max-width: 240px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 280px;
  }
`;
