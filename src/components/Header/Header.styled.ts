import { theme } from '@/constants';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;
