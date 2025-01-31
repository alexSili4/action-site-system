import { animations } from '@/constants';
import styled from '@emotion/styled';
import { IStyledProps } from './StatisticsCodeMarksMessage.types';

export const Container = styled.div<IStyledProps>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    justify-content: ${({ isCodeDetails }) => isCodeDetails && 'space-between'};
  }
`;

export const Text = styled.p<IStyledProps>`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: ${({ isCodeDetails }) => (isCodeDetails ? 14 : 12)}px;
  font-weight: 400;
  line-height: ${({ isCodeDetails }) => (isCodeDetails ? 1.4 : 1.1)};
`;

export const ImgWrap = styled.div`
  position: relative;
  animation: ${animations.pulse} 3000ms linear infinite alternate;
`;

export const Image = styled.img<IStyledProps>`
  width: ${({ isCodeDetails }) => (isCodeDetails ? 50 : 48)}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    width: ${({ isCodeDetails }) => (isCodeDetails ? 50 : 52)}px;
  }
`;

export const ImgText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 800;
  line-height: 1.43;
  transform: translateX(-50%) translateY(-50%) rotate(-3deg);
`;
