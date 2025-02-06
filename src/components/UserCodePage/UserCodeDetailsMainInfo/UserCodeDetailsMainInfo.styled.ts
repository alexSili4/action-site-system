import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  IStyledCodeDetailsItemProps,
  IStyledCodeDetailsSubtitleProps,
} from './UserCodeDetailsMainInfo.types';

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(10)};
  }
`;

export const CodeDetailsWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(14)};
    align-items: flex-end;
  }
`;

export const CodeDetailsItem = styled.div<IStyledCodeDetailsItemProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  }
`;

export const CodeDetailsSubtitle = styled.p<IStyledCodeDetailsSubtitleProps>`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    width: ${({ isAutoWidth }) => !isAutoWidth && '117px'};
  }
`;

export const CodeDetailsText = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  & > svg {
    width: 10px;
    aspect-ratio: 1 / 1;
  }
`;

export const CodeDetailsTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};
`;

export const TargetShopAddressIconWrap = styled.span`
  padding-left: ${({ theme }) => theme.spacing()};
  padding-right: ${({ theme }) => theme.spacing()};

  & > svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const TargetShopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const TargetShopTitle = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const TargetShop = styled.p``;

export const TargetShopAddress = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const PrizeDrawingDateWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 215px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const PrizeDrawingDateTitle = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const PrizeDrawingDateText = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const MarksMessageWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(14)};
    align-items: flex-end;
  }
`;
