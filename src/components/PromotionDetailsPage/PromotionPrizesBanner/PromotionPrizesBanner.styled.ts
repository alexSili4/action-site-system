import styled from '@emotion/styled';
import { IStyledProps } from './PromotionPrizesBanner.types';

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  height: 542px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(5)}`};
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    justify-content: flex-end;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 430px;
    padding: ${({ theme }) => `${theme.spacing(12)} ${theme.spacing(10)}`};
  }
`;
