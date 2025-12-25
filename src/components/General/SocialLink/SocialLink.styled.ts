import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 0px 0px #7a4ebd,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #9066cc;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other},
    background-color ${({ theme }) => theme.transitionDurationAndFunc.other};

  body.${ClassNames.newYear} & {
    background-color: #fd4b3c;
    box-shadow: 2px 2px 0px 0px #cc3333;
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    box-shadow: 1px 1px 0px 0px #7a4ebd,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }
`;
