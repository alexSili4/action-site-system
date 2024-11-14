import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  IStyledCodeDetailsItemProps,
  IStyledCodeDetailsSubtitleProps,
  IStyledPrizesInfoTextProps,
} from './UserCodeDetails.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* flex-grow: 1; */
    /* justify-content: space-between; */
    /* padding: ${({ theme: { spacing } }) =>
      `${spacing(10)} ${spacing(14)}`}; */
    /* border-radius: 16px; */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) =>
    `${spacing(6)} ${spacing(5)} ${spacing(8)}`};
  border-radius: 24px;
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(9)}; */
  }
`;

export const CodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(6)}; */
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 47px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    & > svg {
      /* width: 73px; */
    }
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* font-size: 24px; */
    /* font-weight: 500; */
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(10)}; */
  }
`;

export const CodeDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* justify-content: space-between; */
    /* align-items: flex-end; */
  }
`;

export const CodeDetailsItem = styled.div<IStyledCodeDetailsItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'}; */
    /* flex-direction: column; */
    /* gap: ${({ theme }) => theme.spacing(2)}; */
  }
`;

export const CodeDetailsSubtitle = styled.p<IStyledCodeDetailsSubtitleProps>`
  /* flex-shrink: 0; */
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    width: ${({ isAutoWidth }) => !isAutoWidth && '117px'};
  }
`;

export const CodeDetailsText = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  /* white-space: nowrap; */
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
  /* display: flex; */
  /* align-items: center; */
  /* gap: ${({ theme }) => theme.spacing()}; */
`;

export const TargetShopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* display: none; */
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

export const TargetShopAddressIconWrap = styled.span`
  padding-left: ${({ theme }) => theme.spacing()};
  padding-right: ${({ theme }) => theme.spacing()};

  & > svg {
    color: #a282f7;
  }
`;

export const PrizeDrawingDateWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing(2)}; */

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const UserCodeInfoDelimiter = styled.div`
  border: 1px solid #f4f6f9;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* display: none; */
  }
`;

export const PrizesInfo = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing(8)}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* flex-direction: column-reverse; */
  }
`;

export const PrizeDrawingDateTitle = styled.p`
  /* color: #7e8494; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 14px; */
  /* font-weight: 400; */
  /* line-height: 1.4; */
`;

export const PrizeDrawingDateText = styled.p`
  /* color: #383e45; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 16px; */
  /* font-weight: 400; */
  /* line-height: 1.4; */
`;

export const CertificateWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    /* gap: ${({ theme }) => theme.spacing(4)}; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* flex-direction: row-reverse; */
    /* justify-content: space-between; */
  }
`;

export const CertificateLink = styled(Link)`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* height: 48px; */
  /* border-radius: 16px; */
  /* box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #7a4ebd; */
  /* background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  ); */
  /* background-color: #9066cc; */
  /* color: ${({ theme }) => theme.colors.white}; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 14px; */
  /* font-weight: 500; */
  /* line-height: 1; */
  /* text-transform: uppercase; */
  /* transition: box-shadow ${({ theme }) =>
    theme.transitionDurationAndFunc.other}; */

  &:is(:hover, :focus) {
    /* box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #7a4ebd; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* width: 342px; */
    /* height: 54px; */
  }
`;

export const CertificateInfo = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing(2)}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(3)}; */
  }
`;

export const PrizesInfoTitle = styled.p`
  /* color: #7e8494; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 14px; */
  /* font-weight: 400; */
  /* line-height: 1.4; */
`;

export const Certificate = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* gap: ${({ theme }) => theme.spacing(2)}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(4)}; */
  }
`;

export const PrizesInfoText = styled.p<IStyledPrizesInfoTextProps>`
  /* color: #383e45; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 16px; */
  /* font-weight: 400; */
  /* line-height: 1.4; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'}; */
  }
`;

export const CertificateNumberWrap = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* gap: ${({ theme }) => theme.spacing()}; */

  & > svg {
    /* width: 18px; */
    /* fill: #a282f7; */
    /* stroke-width: 0px; */
    /* stroke: #a282f7; */
  }
`;

export const CertificateNumber = styled.p`
  /* color: #a282f7; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 16px; */
  /* font-weight: 500; */
  /* line-height: 1.4; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* font-size: 18px; */
  }
`;

export const PrizeWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing()}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(2)}; */
  }
`;

export const PrizesInfoTextWrap = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* gap: ${({ theme }) => theme.spacing(3)}; */

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    /* display: none; */
  }
`;
