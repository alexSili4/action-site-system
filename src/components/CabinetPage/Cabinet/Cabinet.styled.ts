import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 24px;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(3)} ${spacing(4)} ${spacing(10)}`};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;
