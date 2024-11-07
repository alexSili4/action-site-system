import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PrizeInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PrizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Name = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Code = styled.p`
  width: 180px;
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Date = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
`;

export const PrizeImg = styled.img`
  flex-shrink: 0;
  width: 90px;
  aspect-ratio: 1 / 1;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  border-top: 1px solid #f4f6f9;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Text = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
`;
