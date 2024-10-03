import { ClassNames } from '@/constants';
import styled from '@emotion/styled';
import { IStyledProps } from './PromotionConditionsSlider.types';

export const Container = styled.div<IStyledProps>`
  margin-top: ${({ theme }) => theme.spacing(8)};

  & .${ClassNames.swiperSlide} {
    height: ${({ slideHeight }) => slideHeight && slideHeight}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(14)};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  background-color: #f4f6f9;
  overflow: hidden;
`;

export const TitleWrap = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) =>
    `${theme.spacing(10)} ${theme.spacing(6)} ${theme.spacing(12)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
  }
`;

export const Cover = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 198px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const StepLabelWrap = styled.div`
  position: absolute;
  top: -26px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 56px;
  border-radius: 16px;
  box-shadow: 3px 3px 0px 0px #7a4ebd;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
`;

export const StepLabel = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 28px;
  font-weight: 800;
  line-height: 1.43;
`;
