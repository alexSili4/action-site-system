import { FC } from 'react';
import UserCodeStatus from '@UserCodePageComponents/UserCodeStatus';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';
import { HiLocationMarker } from 'react-icons/hi';
import { PagePaths, theme } from '@/constants';
import CouponIcon from '@/icons/cabinet/coupon.svg?react';
import AtbLogo from '@/icons/atb-logo.svg?react';
import {
  Content,
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
  CodeDetailsTextWrap,
  PrizeDrawingDateWrap,
  PrizeDrawingDateTitle,
  PrizeDrawingDateText,
  PrizesInfoTextWrap,
  TargetShopAddressIconWrap,
} from './UserCodeDetails.styled';
import UserStatisticsDetailsDelimiter from '@CabinetPageComponents/UserStatisticsDetailsDelimiter';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';

const UserCodeDetails: FC = () => {
  return (
    <Container>
      <CabinetGoBackLink />
      <Content>
        <MainInfoWrap>
          <CodeInfo>
            <TitleWrap>
              <Title>Акційний код АТБ</Title>
              <AtbLogo />
            </TitleWrap>
            {/* TODO fix */}
            <UserCodeStatus isErrorStatus={false} isSuccessStatus={true} />
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
              <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
              <CodeDetailsItem>
                <CodeDetailsSubtitle>Дата активації:</CodeDetailsSubtitle>
                <CodeDetailsText>18.07.2024</CodeDetailsText>
              </CodeDetailsItem>
              <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
              <CodeDetailsItem isHiddenOnDesk>
                <CodeDetailsSubtitle>№ чеку з кодом:</CodeDetailsSubtitle>
                <CodeDetailsText>1346517</CodeDetailsText>
              </CodeDetailsItem>
              <CodeDetailsItem isHiddenOnDesk>
                <CodeDetailsSubtitle>
                  Дата розіграшу призів:
                </CodeDetailsSubtitle>
                <CodeDetailsText>18.07.2024</CodeDetailsText>
              </CodeDetailsItem>
              <CodeDetailsItem isHiddenOnMobile>
                <CodeDetailsSubtitle>Магазин де отримано:</CodeDetailsSubtitle>
                <CodeDetailsTextWrap>
                  <CodeDetailsText>
                    №234 Київ, вул. Ватутіна, 168
                  </CodeDetailsText>
                  <TargetShopAddressIconWrap>
                    <HiLocationMarker
                      size={theme.iconSizes.userCodeDetailsMarker}
                    />
                  </TargetShopAddressIconWrap>
                </CodeDetailsTextWrap>
              </CodeDetailsItem>
            </CodeDetailsWrap>
            <TargetShopWrap>
              <TargetShopTitle>Магазин де отримано:</TargetShopTitle>
              <TargetShop>
                <TargetShopAddress>
                  №234 Київ, вул. Щербаківського Данила, 161
                </TargetShopAddress>{' '}
                <TargetShopAddressIconWrap>
                  <HiLocationMarker
                    size={theme.iconSizes.userCodeDetailsMarker}
                  />
                </TargetShopAddressIconWrap>
              </TargetShop>
            </TargetShopWrap>
            <PrizeDrawingDateWrap>
              <PrizeDrawingDateTitle>
                Дата розіграшу призів:
              </PrizeDrawingDateTitle>
              <PrizeDrawingDateText>18.07.2024</PrizeDrawingDateText>
            </PrizeDrawingDateWrap>
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
          <UserCodeInfoDelimiter></UserCodeInfoDelimiter>
          <PrizeWrap>
            <PrizesInfoTitle>Виграний приз:</PrizesInfoTitle>
            <PrizesInfoText isHiddenOnDesk>
              18.07.2024 Кухонна машина TEFAL QB813D38
            </PrizesInfoText>
            <PrizesInfoTextWrap>
              <PrizesInfoText>18.07.2024</PrizesInfoText>
              <PrizesInfoText>Кухонна машина TEFAL QB813D38</PrizesInfoText>
            </PrizesInfoTextWrap>
          </PrizeWrap>
        </PrizesInfo>
      </Content>
    </Container>
  );
};

export default UserCodeDetails;
