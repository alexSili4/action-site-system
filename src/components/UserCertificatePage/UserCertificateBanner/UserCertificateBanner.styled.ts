import barcode from '@/images/userCertificate/barcode.png';
import styled from '@emotion/styled';
import decorativeElement from '@/images/userCertificate/decorativeElement.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(42)};
  padding: ${({ theme: { spacing } }) =>
    `${spacing(9)} ${spacing(5)} ${spacing(4)}`};
  background-color: blue;
  background-image: url(${decorativeElement});
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const BarcodeWrap = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Barcode = styled.div`
  padding-top: ${({ theme }) => theme.spacing(19)};
  background-image: url(${barcode});
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const BarcodeText = styled.p`
  color: #494545;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 15.33px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.4;
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
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

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
