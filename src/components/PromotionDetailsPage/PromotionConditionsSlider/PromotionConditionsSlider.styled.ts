import styled from '@emotion/styled';
import { IStyledCoverProps } from './PromotionConditionsSlider.types';
import rulesCardNewYearBg from '@/images/new-year/condition-new-year.webp';
import { ClassNames } from '@/constants';

export const Card = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  background-color: #f4f6f9;
  overflow: hidden;
`;

export const TitleWrap = styled.div`
  flex-grow: 1;
  padding: ${({ theme: { spacing } }) => `${spacing(10)} ${spacing(6)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(10)} ${spacing(8)}`};
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;

export const Cover = styled.div<IStyledCoverProps>`
  flex-shrink: 0;
  position: relative;
  display: ${({ bgImgUrl }) => bgImgUrl && 'flex'};
  align-items: center;
  justify-content: center;
  height: 198px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  background-image: ${({ bgImgUrl }) => bgImgUrl && `url(${bgImgUrl})`};
  padding: ${({ theme, bgImgUrl }) => bgImgUrl && theme.spacing(6)};

  body.${ClassNames.newYear} & {
    background-image: url(${rulesCardNewYearBg});
    object-fit: cover;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const StepLabelWrap = styled.div`
  position: absolute;
  top: -26px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 56px;
  border-radius: 16px;
  box-shadow: 3px 3px 0px 0px #7a4ebd;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
`;

export const StepLabel = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 28px;
  font-weight: 800;
  line-height: 1.43;
`;

export const RulesLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing()};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: 16px;
  box-shadow: 3px 3px 0px 0px #e8c47d;
  background-color: #ffeecc;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  & > svg {
    color: #3d3e46;
  }

  &:is(:hover, :focus) {
    box-shadow: 1px 1px 0px 0px #e8c47d;
  }
`;

export const RulesLinkTitle = styled.span`
  color: #3d3e46;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;
