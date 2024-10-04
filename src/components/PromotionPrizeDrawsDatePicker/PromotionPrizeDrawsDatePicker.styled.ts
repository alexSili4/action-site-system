import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const DatePickerWrap = styled.div``;

export const DatePickerBtn = styled.button``;

export const DatePickerBtnTitle = styled.span``;
