import styled from '@emotion/styled';

export const Table = styled.table`
  flex-grow: 1;
  border-collapse: collapse;
`;

export const Head = styled.thead``;

export const Row = styled.tr``;

export const Header = styled.th`
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;

  &:not(:first-of-type) {
    padding-left: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Body = styled.tbody``;

export const Data = styled.td`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  white-space: nowrap;

  &:not(:first-of-type) {
    padding-left: ${({ theme }) => theme.spacing(4)};
  }
`;
