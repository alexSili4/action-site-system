import styled from '@emotion/styled';
import { IStyledProps } from './Container.types';

export const StyledContainer = styled.div<IStyledProps>`
  width: ${({ compactPadding, theme: { containerWidth, padding } }) => {
    const totalPadding =
      (compactPadding ? padding.compact : padding.container) * 2;
    const width = compactPadding
      ? containerWidth.largeMobile
      : containerWidth.mobile;

    return width + totalPadding;
  }}px;
  padding-left: ${({ compactPadding, theme: { padding } }) =>
    compactPadding ? padding.compact : padding.container}px;
  padding-right: ${({ compactPadding, theme: { padding } }) =>
    compactPadding ? padding.compact : padding.container}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ theme: { containerWidth, padding } }) =>
      containerWidth.tablet + padding.container * 2}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ theme: { containerWidth, padding } }) =>
      containerWidth.desktop + padding.container * 2}px;
  }
`;
