import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    width: 330px;
  }
`;

export const ShopsListBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  border: none;
  background-color: #f4f6f9;
  box-shadow: -4px 0px 20px 0px rgba(32, 31, 47, 0.1);

  & > svg {
    color: #2e305b;
  }
`;

export const Title = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
  }
`;
