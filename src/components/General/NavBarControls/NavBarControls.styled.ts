import styled from '@emotion/styled';
import { IStyledProps } from './NavBarControls.types';
import { Link } from 'react-router-dom';

export const Container = styled.div<IStyledProps>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ isShowRegCodeLink }) =>
    isShowRegCodeLink ? 'center' : 'flex-end'};
  gap: ${({ isRootPage, theme }) => theme.spacing(isRootPage ? 2 : 4)};
  order: ${({ isRootPage }) => (isRootPage ? 1 : 2)};
  width: ${({ isRootPage }) => (isRootPage ? '100%' : 'auto')};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 0;
    gap: ${({ theme }) => theme.spacing(2)};
    order: ${({ isFake }) => (isFake ? 1 : 3)};
    width: auto;
    opacity: ${({ isFake }) => isFake && 0};
    pointer-events: ${({ isFake }) => isFake && 'none'};
    user-select: ${({ isFake }) => isFake && 'none'};
  }
`;

export const CabinetLink = styled(Link)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-color: #fd4b3c;
  box-shadow: 3px 3px 0px 0px #cc3333,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    box-shadow: 2px 2px 0px 0px #cc3333,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }
`;
