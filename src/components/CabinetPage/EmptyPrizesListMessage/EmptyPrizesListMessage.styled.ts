import styled from '@emotion/styled';
import { IStyledContainerProps } from './EmptyPrizesListMessage.types';

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(70)};
  background-image: url(${({ bgImg }) => bgImg});
  background-position: center;
  background-size: ${({ isBigImgSize }) => (isBigImgSize ? 218 : 179)}px auto;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(81)};
    height: 100%;
    background-size: ${({ isBigImgSize }) => (isBigImgSize ? 254 : 198)}px auto;
  }
`;

export const Title = styled.p`
  color: rgb(56, 62, 69);
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    width: 243px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #9066cc;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #7a4ebd;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 238px;
  }
`;
