import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 16px;
  background-color: #ffeecc;
  box-shadow: 3px 3px 0px 0px #e8c47d,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  color: #3f3d5c;
  font-family: Geologica;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  &:is(:hover, :focus) {
    box-shadow: 2px 2px 0px 0px #e8c47d,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    min-width: 202px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 16px;
  background-color: #ffeecc;
  box-shadow: 3px 3px 0px 0px #e8c47d,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  color: #3f3d5c;
  font-family: Geologica;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  &:is(:hover, :focus) {
    box-shadow: 2px 2px 0px 0px #e8c47d,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    min-width: 202px;
  }
`;
