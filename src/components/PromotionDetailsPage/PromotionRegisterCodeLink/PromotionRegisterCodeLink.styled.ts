import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledProps } from './PromotionRegisterCodeLink.types';

export const Container = styled.div<IStyledProps>`
  max-width: 426px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme, shouldShowTopSpacing }) =>
    shouldShowTopSpacing && theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-color: #ffeecc;
  padding: ${({ theme }) => theme.spacing(5)};
  box-shadow: 3px 3px 0px 0px #e8c47d,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  color: #3f3d5c;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  &:is(:hover, :focus) {
    box-shadow: 2px 2px 0px 0px #e8c47d,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }
`;
