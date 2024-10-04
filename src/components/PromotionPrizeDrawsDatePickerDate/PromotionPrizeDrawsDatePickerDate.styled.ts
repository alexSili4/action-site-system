import styled from '@emotion/styled';

export const Container = styled.label`
  display: block;
  border-radius: 2px;
  background-color: transparent;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  cursor: pointer;

  &:is(:hover, :focus, :has(input:checked)) {
    background-color: #f4f6f9;
  }
`;

export const Title = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;
