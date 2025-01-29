import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledImgWrapProps,
} from './PromotionPrizesBanner.types';

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Container = styled.div<IStyledContainerProps>`
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
    padding: ${({ theme, isLogo }) =>
      `${theme.spacing(isLogo ? 6 : 12)} ${theme.spacing(10)}`};
  }
`;

export const ImgWrap = styled.div<IStyledImgWrapProps>`
  position: relative;
  display: flex;
  justify-content: ${({ isLogo }) => (isLogo ? 'space-between' : 'flex-end')};
  align-items: ${({ isLogo }) => (isLogo ? 'flex-start' : 'center')};
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: auto;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 120px;
`;
