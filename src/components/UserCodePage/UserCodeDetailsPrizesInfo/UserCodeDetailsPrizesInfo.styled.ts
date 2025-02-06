import styled from '@emotion/styled';
import {
  IStyledCertificateWrapProps,
  IStyledPrizesInfoTextProps,
} from './UserCodeDetailsPrizesInfo.types';
import { Link } from 'react-router-dom';

export const PrizesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

export const CertificateWrap = styled.div<IStyledCertificateWrapProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: ${({ isSuccessStatus }) =>
      isSuccessStatus && 'row-reverse'};
    justify-content: space-between;
  }
`;

export const CertificateDetailsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #7a4ebd;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #9066cc;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #7a4ebd;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 342px;
    height: 54px;
  }
`;

export const CertificateInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const PrizesInfoTitle = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Certificate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const PrizesInfoText = styled.p<IStyledPrizesInfoTextProps>`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
  }
`;

export const CertificateLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};

  & > svg {
    width: 18px;
    fill: ${({ theme }) => theme.colors.purple};
    stroke-width: 0px;
    stroke: ${({ theme }) => theme.colors.purple};
  }
`;

export const PrizeLinkTitle = styled.span`
  color: ${({theme})=>theme.colors.purple};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;

export const PrizeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const PrizesInfoTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const PrizeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
