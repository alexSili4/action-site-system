import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 90px;
  height: 56px;
  border: none;
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;

  &:is(:hover, :focus) {
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 134px;
  }
`;
