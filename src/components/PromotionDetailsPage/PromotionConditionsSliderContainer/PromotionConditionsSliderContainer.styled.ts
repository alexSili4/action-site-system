import styled from '@emotion/styled';
import { ClassNames } from '@/constants';
import { IStyledContainerProps } from './PromotionConditionsSliderContainer.types';

export const Container = styled.div<IStyledContainerProps>`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(8)};
  overflow: hidden;

  & > .${ClassNames.swiper} {
    overflow: visible;
  }

  & .${ClassNames.swiperSlide} {
    height: ${({ slideHeight }) => slideHeight && slideHeight}px;
    padding-left: ${({ paddingSideMobile }) =>
      paddingSideMobile ? paddingSideMobile : '0px'};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      padding-left: ${({ paddingSideDesk }) =>
        paddingSideDesk ? paddingSideDesk : '0px'};
    }
  }

  & .${ClassNames.swiperSlide}:last-of-type {
    padding-right: ${({ paddingSideMobile }) =>
      paddingSideMobile ? paddingSideMobile : '0px'};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      padding-right: ${({ paddingSideDesk }) =>
        paddingSideDesk ? paddingSideDesk : '0px'};
    }

    & > div {
      height: ${({ slideHeight }) => slideHeight && slideHeight}px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(14)};
  }
`;
