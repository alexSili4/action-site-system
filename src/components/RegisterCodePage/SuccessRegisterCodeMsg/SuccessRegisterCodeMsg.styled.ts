import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    padding-top: ${({ theme }) => theme.spacing(41)};
    padding-bottom: ${({ theme }) => theme.spacing(12)};
  }
`;

export const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
`;

export const MessageTitle = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0px;
  text-align: center;
`;

export const Message = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0px;
  text-align: center;
`;

export const CabinetLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin-top: ${({ theme }) => theme.spacing(8)};
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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 54px;
    margin-top: ${({ theme }) => theme.spacing(5)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
  }
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 439px;
    margin-top: ${({ theme }) => theme.spacing(40)};
  }
`;
