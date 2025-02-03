import { animations } from '@/constants';
import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledImageProps,
} from './StatisticsCodeMarksMessage.types';

export const Container = styled.div<IStyledContainerProps>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};
  justify-content: ${({ isRegisterCodePage }) =>
    isRegisterCodePage && 'space-between'};
  border-bottom: ${({ isRegisterCodePage }) =>
    isRegisterCodePage && '3px solid rgba(232, 196, 125, 0.3)'};
  border-right: ${({ isRegisterCodePage }) =>
    isRegisterCodePage && '3px solid rgba(232, 196, 125, 0.3)'};
  border-radius: ${({ isRegisterCodePage }) => isRegisterCodePage && 16}px;
  padding: ${({ theme: { spacing }, isRegisterCodePage }) =>
    isRegisterCodePage && `${spacing(3)} ${spacing(8)}`};
  box-shadow: ${({ isRegisterCodePage }) =>
    isRegisterCodePage && '5px 5px 0px 0px #e8c47d'};
  background-color: ${({ isRegisterCodePage }) =>
    isRegisterCodePage && '#ffeecc'};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme: { spacing }, isRegisterCodePage }) =>
      isRegisterCodePage && `${spacing(3)} ${spacing(12)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    justify-content: ${({ isCodeDetailsPage }) =>
      isCodeDetailsPage && 'space-between'};
  }
`;

export const StatisticsCodeText = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;

export const CodeDetailsText = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const RegisterCodeText = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.1;
`;

export const ImgWrap = styled.div`
  position: relative;
  animation: ${animations.pulse} 3000ms linear infinite alternate;
`;

export const Image = styled.img<IStyledImageProps>`
  width: ${({ mobSize }) => mobSize}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    width: ${({ deskSize }) => deskSize}px;
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
