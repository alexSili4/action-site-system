import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme: { spacing } }) => `${spacing(8)} ${spacing(11)}`};

  & > svg {
    color: #7e8494;
  }
`;

export const Title = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
`;
