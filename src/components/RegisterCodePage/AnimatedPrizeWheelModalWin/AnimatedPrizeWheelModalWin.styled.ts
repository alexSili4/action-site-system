import { animations } from '@/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AnimatedBackdropContainer = styled(motion.div)`
  z-index: ${({ theme }) => theme.zIndex.animatedPrizeWheelModalWin};
`;

export const BackdropWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing(4)};
  padding-top: ${({ theme }) => theme.spacing(47)};
  backdrop-filter: blur(20px);
  background-color: rgba(255, 241, 204, 0.14);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(25)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(50)};
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 566px;
  }
`;

export const AnimatedContentContainer = styled(motion.div)``;

export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(25)};
  padding-top: ${({ theme }) => theme.spacing(37)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  border-right: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 5px 5px 0px 0px #7a4ebd;
  background-image: linear-gradient(
    180deg,
    #e73bf3,
    ${({ theme }) => theme.colors.purple} 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(22)};
    padding-top: ${({ theme }) => theme.spacing(16)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(32)};
  }
`;

export const AnimatedPrizeImgContainer = styled(motion.div)`
  position: absolute;
  top: -72px;
  left: 50%;
  z-index: ${({ theme }) => theme.zIndex.animatedPrizeImg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -90px;
  }
`;

export const PrizeImg = styled.img`
  width: 160px;
  animation: ${animations.smoothPrizeImgRotate} 10000ms linear infinite
    alternate;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 190px;
  }
`;

export const FireworksImg = styled.img`
  position: absolute;
  top: -331px;
  left: calc(50% - 12px);
  width: 739px;
  max-width: 739px;
  transform: translateX(-50%);
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: calc(50% + 10px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: calc(50% - 10px);
  }
`;

export const CertificateWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};
  width: 290px;
  border: 3.95px solid rgba(255, 255, 255, 0.2);
  border-radius: 15.82px;
  background-color: #7a4ebd;
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 367px;
    border: 5px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(9)};
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 11.07px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 14px;
  }
`;

export const Prize = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: 56px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.85px;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 70px;
    letter-spacing: -1.07px;
  }
`;

export const LogoPartnerWrap = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing()};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(100%) translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    bottom: 17px;
  }
`;

export const LogoPartner = styled.img`
  width: 120px;
`;

export const NextStepBtn = styled.button`
  width: 290px;
  padding: ${({ theme }) => theme.spacing(5)};
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #cf0c2e;
  background-color: #fd4b3c;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #cf0c2e;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 211px;
  }
`;
