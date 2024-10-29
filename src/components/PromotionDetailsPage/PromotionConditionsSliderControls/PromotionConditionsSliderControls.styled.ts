import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(9)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const SliderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border: none;
  border-radius: 13.13px;
  box-shadow: 2px 2px 0px 0px #7a4ebd,
    inset 0px -1.31px 2.63px 0px rgba(255, 255, 255, 0.1);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #9066cc;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    box-shadow: 1px 1px 0px 0px #7a4ebd,
      inset 0px -1.31px 2.63px 0px rgba(255, 255, 255, 0.1);
  }

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
