import styled from '@emotion/styled';

export const Container = styled.div`
  align-self: flex-start;
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(5)}`};
  border-radius: 4px;
  background-color: rgba(63, 61, 92, 0.24);
`;

export const Period = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
`;
