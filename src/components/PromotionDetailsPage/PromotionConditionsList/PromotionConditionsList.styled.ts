import styled from '@emotion/styled';
import { IStyledProps } from './PromotionConditionsList.types';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ListItem = styled.li`
  & > div {
    width: 335px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 426px;
    }
  }

  &:first-of-type > div {
    margin-left: ${({ theme }) => theme.spacing(4)};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      margin-left: ${({ theme }) => theme.spacing(8)};
    }
  }

  &:last-of-type > div {
    margin-right: ${({ theme }) => theme.spacing(4)};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      margin-right: ${({ theme }) => theme.spacing(8)};
    }
  }
`;

export const Card = styled.div`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(10)} ${spacing(8)}`};
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
  }
`;

export const Cover = styled.div`
  flex-shrink: 0;
  position: relative;
  height: 198px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
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

export const RulesCard = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: 12px;
  background-image: url(${({ bgImgUrl }) => bgImgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
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
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

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
