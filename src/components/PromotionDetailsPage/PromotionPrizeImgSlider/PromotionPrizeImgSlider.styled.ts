import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 12px;
  background-color: #f4f6f9;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(15)};
`;

export const ImgWrap = styled.div`
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  display: block;
`;

export const TitleWrap = styled.div`
  height: 52px;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;

export const LabelsWrap = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.prizeStatus};
  top: 16px;
  left: 50%;
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 16px * 2);
  min-height: 38px;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 40px;
    width: calc(100% - 40px * 2);
  }
`;

export const LogoPartner = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  max-width: 120px;
  transform: translateY(-50%);
`;
