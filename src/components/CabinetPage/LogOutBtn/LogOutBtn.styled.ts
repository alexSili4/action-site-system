import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(6)};
  border: 1.5px solid #9066cc;
  border-radius: 16px;
  background-color: transparent;
  padding: ${({ theme: { spacing } }) => `${spacing(5)} ${spacing(6)}`};
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
`;
