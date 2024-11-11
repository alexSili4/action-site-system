import barcode from '@/images/userCertificate/barcode.png';
import styled from '@emotion/styled';
import decorativeElement from '@/images/userCertificate/decorativeElement.png';

export const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    gap: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
    border-radius: 16px;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(9)} ${spacing(5)} ${spacing(4)}`};
  background-color: blue;
  background-image: url(${decorativeElement});
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    gap: ${({ theme }) => theme.spacing(42)};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const BarcodeWrap = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme }) => theme.spacing(5)};
    border-radius: 6px;
  }
`;

export const Barcode = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-top: ${({ theme }) => theme.spacing(19)};
    background-image: url(${barcode});
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const BarcodeTitle = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const BarcodeText = styled.p`
  color: #494545;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 15.33px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18px;
    letter-spacing: 0.01;
  }
`;

export const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing()};
  height: 48px;
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #7a4ebd;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #9066cc;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 54px;
  }

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #7a4ebd;
  }
`;

export const DownloadLinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;
