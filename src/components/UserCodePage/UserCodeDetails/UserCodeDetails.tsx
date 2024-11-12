import { FC } from 'react';
import UserCodeStatus from '@UserCodePageComponents/UserCodeStatus';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';
import { HiLocationMarker } from 'react-icons/hi';
import { PagePaths, theme } from '@/constants';
import CouponIcon from '@/icons/cabinet/coupon.svg?react';
import AtbLogo from '@/icons/atb-logo.svg?react';
import {
  Certificate,
  PrizesInfoText,
  CertificateInfo,
  CertificateLink,
  CertificateNumber,
  CertificateNumberWrap,
  PrizesInfoTitle,
  CertificateWrap,
  CodeDetailsItem,
  CodeDetailsSubtitle,
  CodeDetailsText,
  CodeDetailsWrap,
  Container,
  PrizesInfo,
  PrizeWrap,
  StyledLink,
  TargetShop,
  TargetShopAddress,
  TargetShopTitle,
  TargetShopWrap,
  Title,
  TitleWrap,
  CodeInfo,
  MainInfoWrap,
  UserCodeInfoDelimiter,
  MainInfo,
} from './UserCodeDetails.styled';

const UserCodeDetails: FC = () => {
  return (
    <Container>
      <MainInfoWrap>
        <CodeInfo>
          <TitleWrap>
            <Title>Акційний код АТБ</Title>
            <AtbLogo />
          </TitleWrap>
          {/* TODO fix */}
          <UserCodeStatus isErrorStatus={false} isSuccessStatus={false} />
        </CodeInfo>
        <MainInfo>
          <CodeDetailsWrap>
            <CodeDetailsItem>
              <CodeDetailsSubtitle isAutoWidth>Акція:</CodeDetailsSubtitle>
              <StyledLink to={PagePaths.root}>
                <CodeDetailsText>Хапай вигідні пропозиції</CodeDetailsText>
                <NavArrow />
              </StyledLink>
            </CodeDetailsItem>
            <CodeDetailsItem>
              <CodeDetailsSubtitle>Дата активації:</CodeDetailsSubtitle>
              <CodeDetailsText>18.07.2024</CodeDetailsText>
            </CodeDetailsItem>
            <CodeDetailsItem>
              <CodeDetailsSubtitle>№ чеку з кодом:</CodeDetailsSubtitle>
              <CodeDetailsText>1346517</CodeDetailsText>
            </CodeDetailsItem>
            <CodeDetailsItem>
              <CodeDetailsSubtitle>Дата розіграшу призів:</CodeDetailsSubtitle>
              <CodeDetailsText>18.07.2024</CodeDetailsText>
            </CodeDetailsItem>
          </CodeDetailsWrap>
          <TargetShopWrap>
            <TargetShopTitle>Магазин де отримано:</TargetShopTitle>
            <TargetShop>
              <TargetShopAddress>
                №234 Київ, вул. Щербаківського Данила, 161
              </TargetShopAddress>
              <HiLocationMarker size={theme.iconSizes.userCodeDetailsMarker} />
            </TargetShop>
          </TargetShopWrap>
        </MainInfo>
      </MainInfoWrap>
      <UserCodeInfoDelimiter></UserCodeInfoDelimiter>
      <PrizesInfo>
        <CertificateWrap>
          <CertificateLink to={PagePaths.userCertificate}>
            Сертифікат
          </CertificateLink>
          <CertificateInfo>
            <PrizesInfoTitle>Виграний сертифікат:</PrizesInfoTitle>
            <Certificate>
              <PrizesInfoText>18.07.2024</PrizesInfoText>
              <CertificateNumberWrap>
                <CouponIcon />
                <CertificateNumber>dELIVERY347FREE</CertificateNumber>
              </CertificateNumberWrap>
            </Certificate>
          </CertificateInfo>
        </CertificateWrap>
        <PrizeWrap>
          <PrizesInfoTitle>Виграний приз:</PrizesInfoTitle>
          <PrizesInfoText>
            18.07.2024 Кухонна машина TEFAL QB813D38
          </PrizesInfoText>
        </PrizeWrap>
      </PrizesInfo>
    </Container>
  );
};

export default UserCodeDetails;