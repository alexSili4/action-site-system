import styled from '@emotion/styled';
import certificateImg from '@/images/cabinet/certificate.png';
import {
  IStyledCertificateWrapProps,
  IStyledLinkProps,
} from './StatisticsCode.types';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 100%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-radius: 10px;
    padding: ${({ theme: { spacing } }) => `${spacing(7)} ${spacing(8)}`};
  }
`;

export const Header = styled.span`
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: #f4f6f9;
  padding: ${({ theme: { spacing } }) => `${spacing(3)} ${spacing(4)}`};

  & > svg {
    color: #7e8494;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)};
    border-radius: 100px;
  }
`;

export const CodeWrap = styled.span`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Code = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1;
`;

export const Date = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const StyledLink = styled(Link)<IStyledLinkProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  color: #7e8494;

  & > svg {
    &:first-of-type {
      width: 14px;
      height: 14px;
      fill: ${({ isCertificateLink }) => isCertificateLink && '#7e8494'};
      stroke-width: 0px;
      stroke: #7e8494;
    }
  }
`;

export const StyledLinkTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

export const CertificateWrap = styled.div<IStyledCertificateWrapProps>`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  width: 94px;
  height: 55px;
  background-image: url(${({ partnerLogo }) => partnerLogo}),
    url(${certificateImg});
  background-position: center center;
  background-size: contain, cover;
  background-repeat: no-repeat;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid #f4f6f9;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const MessageWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Message = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
`;
