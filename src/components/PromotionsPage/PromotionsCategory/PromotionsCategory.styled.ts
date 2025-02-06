import styled from '@emotion/styled';

export const Container = styled.label`
  position: relative;
  display: block;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: transparent;
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  &:is(:hover, :focus, :has(input:checked))::after {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  &:is(:hover, :focus, :has(input:checked)) > span {
    color: #2e305b;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-width: 182px;
    padding-top: ${({ theme }) => theme.spacing(7)};
    padding-bottom: ${({ theme }) => theme.spacing(7)};
  }
`;

export const Title = styled.span`
  display: block;
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  transition: ${({ theme }) => theme.transitionDurationAndFunc.other};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;

export const RadioBtn = styled.input`
  position: absolute;
  transform: scale(0);
`;
