import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledCodeDetailsSubtitleProps } from './UserCodeDetails.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme: { spacing } }) =>
    `${spacing(6)} ${spacing(5)} ${spacing(8)}`};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const CodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 47px;
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
`;

export const CodeDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const CodeDetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CodeDetailsSubtitle = styled.p<IStyledCodeDetailsSubtitleProps>`
  flex-shrink: 0;
  width: ${({ isAutoWidth }) => !isAutoWidth && '117px'};
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
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

export const CodeDetailsText = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  white-space: nowrap;
`;

export const TargetShopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const TargetShopTitle = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const TargetShop = styled.p`
  & > svg {
    color: #a282f7;
  }
`;

export const TargetShopAddress = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const UserCodeInfoDelimiter = styled.div`
  border: 1px solid #f4f6f9;
`;

export const PrizesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const CertificateWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const CertificateLink = styled(Link)`
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
`;

export const CertificateInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
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
`;

export const PrizesInfoText = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const CertificateNumberWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};

  & > svg {
    width: 18px;
    fill: #a282f7;
    stroke-width: 0px;
    stroke: #a282f7;
  }
`;

export const CertificateNumber = styled.p`
  color: #a282f7;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`;

export const PrizeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;
