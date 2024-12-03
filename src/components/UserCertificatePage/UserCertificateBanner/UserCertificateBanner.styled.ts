import styled from '@emotion/styled';
import decorativeElement from '@/images/cabinet/decorative-element.png';
import { IStyledCertificateImgProps } from './UserCertificateBanner.types';

export const Container = styled.div`
  flex-shrink: 0;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    gap: ${({ theme }) => theme.spacing(3)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 1;
  }
`;

export const CertificateImgWrap = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 1;
  }
`;

export const CertificateImg = styled.div<IStyledCertificateImgProps>`
  display: flex;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(80)} ${spacing(5)} ${spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  background-image: url(${decorativeElement}),
    url(${({ thirdBannerMob }) => thirdBannerMob});
  background-position: 0 0, center;
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 100%;
    align-items: flex-end;
    padding: ${({ theme }) => theme.spacing(8)};
    background-image: url(${decorativeElement}),
      url(${({ thirdBannerDt }) => thirdBannerDt});
  }
`;

export const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing()};
  width: 100%;
  height: 48px;
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px0 #7a4ebd;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #9066cc;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 54px;
  }

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #7a4ebd;
  }
`;

export const DownloadLinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;

export const CertificateCodeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`;

export const CertificateCodeTitle = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
  }
`;

export const CertificateCodeText = styled.p`
  color: #494545;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 15.33px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    letter-spacing: 0.01;
  }
`;
