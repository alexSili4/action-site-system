import styled from '@emotion/styled';
import { IStyledProps } from './PromotionContactsBanner.types';

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(5)}`};
  background-image: url(${({ bannerMob }) => bannerMob});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    height: 480px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 300px;
    background-image: url(${({ bannerDt }) => bannerDt});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 445px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Title = styled.p`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
`;

export const TitleImgWrap = styled.div``;

export const TitleImg = styled.img``;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const LinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
`;
