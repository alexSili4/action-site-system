import styled from '@emotion/styled';

export const Container = styled.label`
  position: relative;
  display: block;
  padding: ${({ theme: { spacing } }) => `${spacing(5)} ${spacing(3)}`};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: calc(100% - 4px * 2);
    height: 4px;
    background-color: transparent;
    transform: translateX(-50%);
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  &:is(:hover, :focus, :has(input:checked))::after {
    background-color: #a282f7;
  }

  &:is(:hover, :focus, :has(input:checked)) > span {
    color: #2e305b;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(7)} ${spacing(10)}`};

    &::after {
      width: calc(100% - 13px * 2);
    }
  }
`;

export const Title = styled.span`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  transition: ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const RadioBtn = styled.input`
  position: absolute;
  transform: scale(0);
`;
