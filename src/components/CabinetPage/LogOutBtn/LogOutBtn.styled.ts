import styled from '@emotion/styled';

export const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(6)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 1.5px solid #9066cc;
  border-radius: 16px;
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing(5)};
  color: #9066cc;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc},
    color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: #9066cc;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;
  }
`;
