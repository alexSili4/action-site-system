import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledSubtitleProps } from './UserCertificateDetails.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme: { spacing } }) =>
      `${spacing(10)} ${spacing(14)} ${spacing(15)}`};
    border-radius: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 24px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(6)} ${spacing(5)} ${spacing(8)}`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(19)};
    justify-content: space-between;
  }
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(25)};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const PartnerLogo = styled.img`
  max-width: 200px;
  width: auto;
`;

export const DetailsWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Subtitle = styled.p<IStyledSubtitleProps>`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  white-space: ${({ nowrap }) => nowrap && 'nowrap'};
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

export const Info = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const UserCertificateInfoDelimiter = styled.div`
  border-top: 1px solid #f4f6f9;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const AdditionalInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ConditionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ConditionsTitle = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const ConditionsInfo = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const HotlineInfoWrap = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const HotlineInfo = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const HotlinePhone = styled.a`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
  background-color: #f4f6f9;
  padding: ${({ theme }) => theme.spacing(2)};

  & > svg {
    color: #7e8494;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(3)} ${spacing(6)}`};
  }
`;

export const HotlinePhoneNumber = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;
