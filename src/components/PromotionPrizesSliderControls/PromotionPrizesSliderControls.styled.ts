import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transform: translateY(-50%);
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const SliderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #49505a;
  pointer-events: all;
`;
