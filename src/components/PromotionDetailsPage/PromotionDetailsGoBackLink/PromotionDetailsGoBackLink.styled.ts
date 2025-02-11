import styled from '@emotion/styled';

export const StyledLink = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-color: #ffeecc;
  box-shadow: 3px 3px 0px 0px #e8c47d,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  & > svg {
    color: #3d3e46;
  }

  &:is(:hover, :focus) {
    box-shadow: 2px 2px 0px 0px #e8c47d,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;
