import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing(20.5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(25)};
  }
`;

export const Content = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(8)};
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

export const PrizesWrap = styled.div`
  position: relative;
`;

export const Garland = styled.img`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 798px;
  height: 798px;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;

  body.${ClassNames.newYear} & {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      display: block;
    }
  }
`;

export const Garland2 = styled.img`
  position: absolute;
  bottom: -32px;
  left: -32px;
  width: 290px;
  height: 188px;
  pointer-events: none;

  body.${ClassNames.newYear} & {
    display: block;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
      display: none;
    }
  }
`;

export const Garland3 = styled.img`
  position: absolute;
  top: 60px;
  right: 0;
  width: 113px;
  height: 247px;
  pointer-events: none;

  display: none;

  body.${ClassNames.newYear} & {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -42px;
    right: -30px;
    width: 255px;
    height: 557px;
  }
`;

export const Garland4 = styled.img`
  position: absolute;
  bottom: 0;
  right: -4px;
  width: 161px;
  height: 105px;
  pointer-events: none;

  display: none;

  body.${ClassNames.newYear} & {
    display: block;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      display: none;
    }
  }
`;

export const Garland5 = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  height: 77px;
  transform: translateX(-50%);
  pointer-events: none;

  display: none;

  body.${ClassNames.newYear} & {
    display: block;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      display: none;
    }
  }
`;
