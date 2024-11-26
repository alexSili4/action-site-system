import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(6)} ${spacing(8)}`};
  }
`;

export const PrizeInfoWrap = styled.div`
  display: flex;

  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    align-items: center;
  }
`;

export const PrizeInfo = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Name = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Code = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    width: 180px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Date = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Accent = styled.span`
  font-weight: 500;
`;

export const PrizeImgWrap = styled.div`
  flex-shrink: 0;
  padding: ${({ theme: { spacing } }) => `${spacing(2)} ${spacing(4)}`};
`;

export const PrizeImg = styled.img`
  width: 74px;
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
