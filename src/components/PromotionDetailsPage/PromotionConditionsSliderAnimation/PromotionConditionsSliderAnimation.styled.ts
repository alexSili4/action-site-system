import styled from '@emotion/styled';
import { IStyledProps } from './PromotionConditionsSliderAnimation.types';

export const Container = styled.div<IStyledProps>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(${({ scale }) => scale});

    & > svg {
      display: block;
    }
  }
`;
