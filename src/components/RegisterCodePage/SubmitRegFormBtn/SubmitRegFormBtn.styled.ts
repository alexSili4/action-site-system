import styled from '@emotion/styled';

export const StyledBtn = styled.button`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(4)};
  border: none;
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #7a4ebd;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionDurationAndFunc};

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):is(:hover, :focus, ) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #7a4ebd;
  }
`;
