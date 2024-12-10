import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  aspect-ratio: 1 / 1;
  margin-left: auto;
  margin-right: auto;
  border-radius: 500%;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #fd4b3c;
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: #3f3d5c;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(16)};
  padding: ${({ theme }) => theme.spacing(5)};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 3px 3px 0px 0px #cf0c2e;
  background-color: #fd4b3c;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  &:is(:hover, :focus) {
    box-shadow: 2px 2px 0px 0px #cf0c2e;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 202px;
    margin-top: ${({ theme }) => theme.spacing(12)};
    margin-left: auto;
    margin-right: auto;
  }
`;
