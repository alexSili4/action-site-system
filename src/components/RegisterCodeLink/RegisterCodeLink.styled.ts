import styled from '@emotion/styled';
import { IStyledProps } from './RegisterCodeLink.types';

export const LinkWrap = styled.div<IStyledProps>`
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing()};
    height: 50px;
    border-radius: 16px;
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      3px 3px 0px 0px #7a4ebd;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0) 100%
    );
    background-color: #9066cc;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

    & > svg {
      color: ${({ theme }) => theme.colors.white};
    }

    &:is(:hover, :focus) {
      box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
        1px 1px 0px 0px #7a4ebd;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
      display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      display: ${({ isHiddenOnMobile }) => !isHiddenOnMobile && 'none'};
    }
  }
`;

export const LinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
`;
