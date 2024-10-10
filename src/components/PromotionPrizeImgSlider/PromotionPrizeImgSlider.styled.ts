import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(22)};
  border-radius: 12px;
  background-color: #f4f6f9;
`;

export const StatusLabel = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 40px;
    right: 40px;
  }
`;

export const ImgWrap = styled.div`
  /* width: 200px; */
  /* height: 200px; */
`;

export const Image = styled.img``;

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
