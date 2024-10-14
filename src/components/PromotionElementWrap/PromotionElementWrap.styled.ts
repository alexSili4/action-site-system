import styled from '@emotion/styled';
import { IStyledProps } from './PromotionElementWrap.types';

export const Container = styled.div<IStyledProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme, isTable }) =>
      isTable ? '0px' : theme.spacing(5)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-grow: ${({ isTable }) => isTable && 1};
  }
`;
