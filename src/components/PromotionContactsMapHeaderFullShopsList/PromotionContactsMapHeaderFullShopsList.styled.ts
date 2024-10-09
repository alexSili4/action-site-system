import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(6)};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(6)}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Link = styled.a`
  color: #a282f7;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;
