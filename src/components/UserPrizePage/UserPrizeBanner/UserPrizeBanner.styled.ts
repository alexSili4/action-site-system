import styled from '@emotion/styled';

export const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 300px;
    border-radius: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
  }
`;

export const PrizeImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f6f9;
  padding-top: ${({ theme }) => theme.spacing(20)};
  padding-bottom: ${({ theme }) => theme.spacing(16)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    border-radius: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 100%;
    padding-top: ${({ theme }) => theme.spacing()};
    padding-bottom: ${({ theme }) => theme.spacing()};
  }
`;

export const PrizeImg = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    max-width: 240px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 250px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 400px;
  }
`;
