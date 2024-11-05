import styled from '@emotion/styled';

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;
