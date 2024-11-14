import styled from '@emotion/styled';
import decorativeElement from '@/images/cabinet/decorative-element.png';

export const Container = styled.div`
  /* flex-shrink: 0; */
  /* display: flex; */
  /* flex-direction: column; */
  /* border-radius: 24px; */
  /* background-color: ${({ theme }) => theme.colors.white}; */
  /* overflow: hidden; */

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    /* gap: ${({ theme }) => theme.spacing(4)}; */
    /* padding: ${({ theme }) => theme.spacing(4)}; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* width: 447px; */
    /* border-radius: 16px; */
  }
`;

export const Content = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing(8)}; */
  /* background-color: #f4f6f9; */
  /* padding: ${({ theme: { spacing } }) =>
    `${spacing(16)} ${spacing(5)} ${spacing(4)}`}; */
  /* background-image: url(${decorativeElement}); */
  /* background-position: 0 0; */
  /* background-size: contain; */
  /* background-repeat: no-repeat; */

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    /* border-radius: 12px; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* justify-content: space-between; */
    /* gap: ${({ theme }) => theme.spacing(30)}; */
    /* padding: ${({ theme: { spacing } }) =>
      `${spacing(16)} ${spacing(10)} ${spacing(8)}`}; */
  }
`;

export const ReceiptInfo = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing(8)}; */
`;

export const ReceiptTitle = styled.p`
  /* color: #383e45; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 20px; */
  /* font-weight: 400; */
  /* line-height: 1.4; */
  /* text-align: center; */
`;

export const ReceiptDetailsWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing(4)}; */
`;

export const ReceiptDetailsDelimiter = styled.div`
  /* border: 1px dashed #7e8494; */
`;

export const ReceiptDetails = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
`;

export const ReceiptDetailsText = styled.p`
  /* color: #383e45; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 16px; */
  /* font-weight: 400; */
  /* line-height: 1.4; */
`;

export const CodeWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing()}; */
  /* border-radius: 16px; */
  /* background-color: ${({ theme }) => theme.colors.white}; */
  /* padding: ${({ theme }) => theme.spacing(3)}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(2)}; */
    /* padding: ${({ theme }) => theme.spacing(5)}; */
  }
`;

export const CodeTitle = styled.p`
  /* color: #7e8494; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 14px; */
  /* font-weight: 400; */
  /* line-height: 1.4; */
  /* text-align: center; */
`;

export const Code = styled.p`
  /* color: #383e45; */
  /* font-family: ${({ theme }) => theme.fontFamily.geologica}; */
  /* font-size: 16px; */
  /* font-weight: 500; */
  /* line-height: 1.13; */
  /* text-align: center; */
`;
