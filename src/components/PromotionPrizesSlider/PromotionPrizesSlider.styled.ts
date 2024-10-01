import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(22)};
  border-radius: 12px;
  background-color: #f4f6f9;
`;

export const ImgWrap = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const TitleWrap = styled.div`
  height: 52px;
  margin-top: ${({ theme }) => theme.spacing(7)};
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;
