import { theme } from '@/constants';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  width: 332px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -2.31px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    order: 2;
    width: auto;
    margin-top: ${({ theme }) => theme.spacing(15)};
    font-size: 32px;
    letter-spacing: 1px;
  }
`;

export const ImgWrap = styled.div`
  @media (max-width: ${theme.breakpoints.desktop - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(18)};
  }

  @media (min-width: ${theme.breakpoints.desktop}px) {
    order: 1;
    width: 1055px;
  }
`;

export const MobileImage = styled.img`
  @media (min-width: ${theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const DeskImage = styled.img`
  @media (max-width: ${theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin-top: ${({ theme }) => theme.spacing(20)};
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px rgb(204, 51, 51);
  background-color: #fd4b3c;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    order: 3;
    width: 280px;
    height: 50px;
    margin-top: ${({ theme }) => theme.spacing(6)};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
  }
`;
