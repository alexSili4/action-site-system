import styled from '@emotion/styled';
import {
  IStyledProps,
  IStyledInfoBtnProps,
  IStyledInfoListWrapProps,
} from './UserInfo.types';

export const Container = styled.div`
  border-top: 1px solid #e3e7ed;
  padding-top: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(12)};
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
  }
`;

export const InfoBtn = styled.button<IStyledInfoBtnProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(2)} 0px`};
  border: none;
  background-color: transparent;

  & > svg {
    color: #383e45;
    transform: rotate(${({ showInfo }) => (showInfo ? 0 : 180)}deg);
    transition: transform
      ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  &:is(:hover, :focus) svg {
    transform: rotate(${({ showInfo }) => (showInfo ? 180 : 0)}deg);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const InfoBtnTitle = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    color: #383e45;
    font-family: ${({ theme }) => theme.fontFamily.geologica};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }
`;

export const InfoListWrap = styled.div<IStyledInfoListWrapProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-top: ${({ theme, showInfo }) => showInfo && theme.spacing(8)};
    transition: padding-top
      ${({ theme }) => theme.transitionDurationAndFunc.other};
    overflow-y: hidden;
  }
`;

export const InfoList = styled.ul<IStyledProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    max-height: ${({ showInfo, scrollHeight }) =>
      showInfo ? scrollHeight : 0}px;
    transition: max-height
      ${({ theme }) => theme.transitionDurationAndFunc.other};
  }
`;

export const ListItem = styled.li``;

export const InfoWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  border: 1px solid #e3e7ed;
  border-radius: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 56px;
    padding-left: ${({ theme }) => theme.spacing(5)};
  }
`;

export const TitleWrap = styled.div`
  position: absolute;
  top: -11px;
  left: 10px;
  padding-left: ${({ theme }) => theme.spacing()};
  padding-right: ${({ theme }) => theme.spacing()};
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: 17px;
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Data = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.57;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;
