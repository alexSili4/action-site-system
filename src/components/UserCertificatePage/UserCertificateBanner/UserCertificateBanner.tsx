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
import { IProps } from './UserCertificateBanner.types';
import { useLocation } from 'react-router-dom';
import { CabinetState } from '@/types/cabinet.types';

const UserCertificateBanner: FC<IProps> = ({ code }) => {
  const {
    state: { from },
  }: CabinetState = useLocation();

  return (
    <Container>
      <CabinetGoBackLink from={from} isShowOnDesk />
      <Content>
        <BarcodeWrap>
          <Barcode>
            <BarcodeTitle>Код сертифікату:</BarcodeTitle>
            <BarcodeText>{code}</BarcodeText>
          </Barcode>
        </BarcodeWrap>
        {/* TODO fix */}
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
