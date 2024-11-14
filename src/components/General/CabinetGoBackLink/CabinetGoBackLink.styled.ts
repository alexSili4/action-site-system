import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledContainerProps } from './CabinetGoBackLink.types';

export const Container = styled.div<IStyledContainerProps>`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isShowOnDesk }) => isShowOnDesk && 'none'};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

export const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  aspect-ratio: 1 / 1;
  border-radius: 10.24px;
  background-color: #ffeecc;
  box-shadow: 3px 3px 0px 0px #e8c47d,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  & > svg {
    color: #3d3e46;
  }

  a:is(:hover, :focus) > & {
    box-shadow: 1px 1px 0px 0px #e8c47d,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }
`;

export const Title = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
`;
