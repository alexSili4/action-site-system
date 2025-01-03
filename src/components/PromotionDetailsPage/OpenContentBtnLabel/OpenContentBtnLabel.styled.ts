import styled from '@emotion/styled';
import { IStyledProps } from './OpenContentBtnLabel.types';

export const Container = styled.span<IStyledProps>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  box-shadow: 2px 2px 0px 0px #7a4ebd,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  & > svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(${({ showContent }) => (showContent ? 180 : 0)}deg);
    transition: transform
      ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  button:not(:disabled):is(:hover, :focus) > & {
    box-shadow: 1px 1px 0px 0px #7a4ebd,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }

  button:not(:disabled):is(:hover, :focus) > & > svg {
    transform: rotate(${({ showContent }) => (showContent ? 0 : 180)}deg);
  }
`;
