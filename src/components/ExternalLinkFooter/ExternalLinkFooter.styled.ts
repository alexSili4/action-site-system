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
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0) 100%
    ),
    #9066cc;

  & > svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
