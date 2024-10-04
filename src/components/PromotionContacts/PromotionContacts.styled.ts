import styled from '@emotion/styled';

export const Container = styled.div``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;
