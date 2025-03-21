import { FC } from 'react';
import { theme } from '@/constants';
import {
  ConditionsInfo,
  ConditionsTitle,
  Container,
  DescriptionWrap,
  DetailsWrap,
  HotlineInfo,
  HotlinePhone,
  HotlinePhoneNumber,
  Info,
  PartnerLogo,
  ConditionsWrap,
  StyledLink,
  Subtitle,
  Title,
  TitleWrap,
  HotlineInfoWrap,
  Content,
  AdditionalInfoWrap,
  MainInfoWrap,
  UserCertificateInfoDelimiter,
} from './UserCertificateDetails.styled';
import { HiOutlinePhone } from 'react-icons/hi';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';
import { IProps } from './UserCertificateDetails.types';
// components
import UserStatisticsDetailsDelimiter from '@CabinetPageComponents/UserStatisticsDetailsDelimiter';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import { usePromotionDetailsState } from '@/hooks';

const UserCertificateDetails: FC<IProps> = ({
  prizeName,
  partnerLogo,
  partnerName,
  conditions,
  code,
  promotionName,
  expiredDate,
  hotLinePhone,
  hotLineWorkHours,
  promotionDetailsPath,
  codeDetailsPath,
  validHotLinePhone,
}) => {
  const promotionDetailsState = usePromotionDetailsState();

  return (
    <Container>
      <CabinetGoBackLink />
      <Content>
        <MainInfoWrap>
          <TitleWrap>
            <Title>{prizeName}</Title>
            <PartnerLogo src={partnerLogo} alt={partnerName} />
          </TitleWrap>
          <DetailsWrap>
            <DescriptionWrap>
              <Subtitle nowrap>Акція:</Subtitle>
              <StyledLink
                to={promotionDetailsPath}
                state={promotionDetailsState}
              >
                <Info>{promotionName}</Info>
                <NavArrow />
              </StyledLink>
            </DescriptionWrap>
            <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
            <DescriptionWrap>
              <Subtitle nowrap>Сертифікат дійсний до:</Subtitle>
              <Info>{expiredDate}</Info>
            </DescriptionWrap>
            <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
            <DescriptionWrap>
              <Subtitle nowrap>Партнер:</Subtitle>
              <Info>{partnerName}</Info>
            </DescriptionWrap>
            <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
            <DescriptionWrap>
              <Subtitle nowrap>Акційний код:</Subtitle>
              <StyledLink to={codeDetailsPath}>
                <Info>{code}</Info>
                <NavArrow />
              </StyledLink>
            </DescriptionWrap>
          </DetailsWrap>
        </MainInfoWrap>
        <UserCertificateInfoDelimiter></UserCertificateInfoDelimiter>
        <AdditionalInfoWrap>
          <ConditionsWrap>
            <ConditionsTitle>Умови використання</ConditionsTitle>
            <ConditionsInfo>{conditions}</ConditionsInfo>
          </ConditionsWrap>
          <HotlineInfoWrap>
            <HotlineInfo>
              Якщо у Вас є питання, звертайтесь на "Гарячу лінію" (графік
              роботи: з понеділка по неділю {hotLineWorkHours}). Дзвінки для
              абонентів усіх національних GSM операторів – відповідно до
              тарифних планів відповідних операторів.
            </HotlineInfo>
            <HotlinePhone href={`tel:${validHotLinePhone}`}>
              <HiOutlinePhone size={theme.iconSizes.cabinetHotlinePhone} />
              <HotlinePhoneNumber>{hotLinePhone}</HotlinePhoneNumber>
            </HotlinePhone>
          </HotlineInfoWrap>
        </AdditionalInfoWrap>
      </Content>
    </Container>
  );
};

export default UserCertificateDetails;
