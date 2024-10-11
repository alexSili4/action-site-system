import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 12px;
  background-color: #f4f6f9;
  padding: ${({ theme }) => theme.spacing(6)};
`;

export const Card = styled.div`
  /* position: relative; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */

  /* padding-top: ${({ theme }) => theme.spacing(22)}; */
  background-color: green;
`;

export const ImgWrap = styled.div`
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  display: block;
`;

export const TitleWrap = styled.div`
  height: 52px;
  /* margin-top: ${({ theme }) => theme.spacing(7)}; */
  background-color: blueviolet;
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;
