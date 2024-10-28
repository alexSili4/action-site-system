import styled from '@emotion/styled';
import { IStyledProps } from './PromotionPrizesBanner.types';

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(5)};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(70)}`};
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(37)};
    padding: ${({ theme }) => `${theme.spacing(12)} ${theme.spacing(10)}`};
  }
`;

export const Title = styled.p`
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
