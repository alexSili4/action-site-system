import styled from '@emotion/styled';

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  background-color: transparent;
  padding: 0;
  border: none;
  color: #a282f7;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0%;
  white-space: nowrap;
`;
