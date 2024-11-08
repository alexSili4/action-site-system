import { FC } from 'react';
import {
  Container,
  Barcode,
  BarcodeText,
  BarcodeWrap,
  Content,
  DownloadLink,
  DownloadLinkTitle,
  BarcodeTitle,
} from './UserCertificateBanner.styled';
import CabinetPageBreadcrumbs from '@GeneralComponents/CabinetPageBreadcrumbs';
import { RiDownloadLine } from 'react-icons/ri';
import { theme } from '@/constants';

const UserCertificateBanner: FC = () => {
  return (
    <Container>
      <CabinetPageBreadcrumbs addPageTitle='Сертифікат' />
      {/* TODO GoBackLink */}
      <Content>
        <BarcodeWrap>
          <Barcode>
            <BarcodeTitle>Код сертифікату:</BarcodeTitle>
            <BarcodeText>dELIVERY</BarcodeText>
          </Barcode>
        </BarcodeWrap>
        <DownloadLink href='/'>
          <DownloadLinkTitle>Завантажити</DownloadLinkTitle>
          <RiDownloadLine
            size={theme.iconSizes.cabinetDownloadCertificateLink}
          />
        </DownloadLink>
      </Content>
    </Container>
  );
};

export default UserCertificateBanner;
