import styled from '@emotion/styled';

export const BackdropWrap = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.animatedPrizeWheelModalWin};
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
  backdrop-filter: blur(20px);
  background-color: rgba(255, 241, 204, 0.14);
`;

export const Container = styled.div`
position: relative;
`

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(25)};
  width: 100%;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(37)} ${spacing(5)} ${spacing(10)}`};
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  border-right: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 5px 5px 0px 0px #7a4ebd;
  background-image: linear-gradient(180deg, #e73bf3, #a282f7 100%);
`;

export const PrizeImg = styled.img`
  position: absolute;
  top: -72px;
  left: 50%;
  width: 160px;
  transform: translateX(-50%);
`;

export const CertificateWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};
  border: 3.95px solid rgba(255, 255, 255, 0.2);
  border-radius: 15.82px;
  background-color: #7a4ebd;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(4)} ${spacing(16)} ${spacing(7)}`};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 11.07px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;

export const Prize = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: 59.29px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.85px;
  text-transform: uppercase;
`;

export const PartnerLogoWrap = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  padding: ${({ theme: { spacing } }) => `${spacing(4)} ${spacing(6)}`};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(100%) translateX(-50%);
`;

export const PartnerLogo = styled.img`
  max-width: 120px;
`;

export const NextStepBtn = styled.button`
  width: 100%;
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
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #cf0c2e;
  }
`;
