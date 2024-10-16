import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) =>
    `${spacing(5)} ${spacing(4)} ${spacing(8)}`};
`;

export const ContentWrap = styled.div``;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;
