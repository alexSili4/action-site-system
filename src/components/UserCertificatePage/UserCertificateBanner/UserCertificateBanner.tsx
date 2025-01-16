import { FC } from 'react';
import {
  Container,
  CertificateCodeText,
  CertificateCodeWrap,
  CertificateImg,
  DownloadLink,
  DownloadLinkTitle,
  CertificateCodeTitle,
  ContentWrap,
  CertificateImgWrap,
} from './UserCertificateBanner.styled';
import { RiDownloadLine } from 'react-icons/ri';
import { theme } from '@/constants';
import { IProps } from './UserCertificateBanner.types';
// components
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';

const UserCertificateBanner: FC<IProps> = ({
  certificateCode,
  thirdBannerDt,
  thirdBannerMob,
  certificatePdf,
}) => {
  return (
    <Container>
      <CabinetGoBackLink isShowOnDesk />
      <ContentWrap>
        <CertificateImgWrap>
          <CertificateImg
            thirdBannerDt={thirdBannerDt}
            thirdBannerMob={thirdBannerMob}
          >
            <DownloadLink
              href={certificatePdf}
            >
              <DownloadLinkTitle>Завантажити</DownloadLinkTitle>
              <RiDownloadLine
                size={theme.iconSizes.cabinetDownloadCertificateLink}
              />
            </DownloadLink>
          </CertificateImg>
        </CertificateImgWrap>
        <CertificateCodeWrap>
          <CertificateCodeTitle>Код сертифікату:</CertificateCodeTitle>
          <CertificateCodeText>{certificateCode}</CertificateCodeText>
        </CertificateCodeWrap>
      </ContentWrap>
    </Container>
  );
};

export default UserCertificateBanner;
