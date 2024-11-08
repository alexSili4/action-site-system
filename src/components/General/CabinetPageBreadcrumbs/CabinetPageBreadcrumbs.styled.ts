import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  & > *:not(:last-child) {
    white-space: nowrap;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const StyledRootPageLink = styled(Link)`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0%;
  text-align: left;
`;

export const DecorativeSymbol = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 8px;
  font-weight: 400;
  line-height: 1.3;
`;

export const StyledPageLink = styled(Link)`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  ${({ theme }) => theme.trimText}
`;

export const StyledPageTitle = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  ${({ theme }) => theme.trimText}
`;
