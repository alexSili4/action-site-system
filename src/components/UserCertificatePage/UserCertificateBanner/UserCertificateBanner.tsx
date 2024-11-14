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
import { RiDownloadLine } from 'react-icons/ri';
import { theme } from '@/constants';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';

const UserCertificateBanner: FC = () => {
  return (
    <Container>
      <CabinetGoBackLink />
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
