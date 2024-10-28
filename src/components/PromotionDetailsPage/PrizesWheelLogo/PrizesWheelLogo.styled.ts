import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: auto;
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)}`};
  border-radius: 11px;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );

  & > svg {
    width: 20px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    & {
      align-self: center;
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16.65px;
  font-weight: 400;
  line-height: 1.1;
`;
