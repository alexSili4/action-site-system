import { FC } from 'react';
import {
  Container,
  Barcode,
  BarcodeText,
  BarcodeWrap,
  ContentWrap,
  DownloadLink,
  DownloadLinkTitle,
  BarcodeTitle,
} from './UserCertificateBanner.styled';
import { RiDownloadLine } from 'react-icons/ri';
import { theme } from '@/constants';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import { IProps } from './UserCertificateBanner.types';

const UserCertificateBanner: FC<IProps> = ({
  code,
  thirdBannerDt,
  thirdBannerMob,
  certificatePdf,
}) => {
  return (
    <Container>
      <CabinetGoBackLink isShowOnDesk />
      <ContentWrap
        thirdBannerDt={thirdBannerDt}
        thirdBannerMob={thirdBannerMob}
      >
        <BarcodeWrap>
          <Barcode>
            <BarcodeTitle>Код сертифікату:</BarcodeTitle>
            <BarcodeText>{code}</BarcodeText>
          </Barcode>
        </BarcodeWrap>
        {/* TODO fix */}
        <DownloadLink href={certificatePdf} download>
          <DownloadLinkTitle>Завантажити</DownloadLinkTitle>
          <RiDownloadLine
            size={theme.iconSizes.cabinetDownloadCertificateLink}
          />
        </DownloadLink>
      </ContentWrap>
    </Container>
  );
};

export default UserCertificateBanner;
