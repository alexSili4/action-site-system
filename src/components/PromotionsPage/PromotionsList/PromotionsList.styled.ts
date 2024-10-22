import styled from '@emotion/styled';
import { IStyledProps } from './PromotionsList.types';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(8)};
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ListItem = styled.li``;

export const Card = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 495px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  background-image: url(${({ mainBannerMob }) => mainBannerMob});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(6)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 485px;
    padding: ${({ theme }) => theme.spacing(14)};
    background-image: url(${({ mainBannerDt }) => mainBannerDt});
  }
`;
