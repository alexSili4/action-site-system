import { FC } from 'react';
import { PagePaths, theme } from '@/constants';
import UserStatisticsDetailsDelimiter from '@CabinetPageComponents/UserStatisticsDetailsDelimiter';
import {
  Container,
  DescriptionWrap,
  DetailsWrap,
  HotlineInfo,
  HotlineInfoWrap,
  HotlinePhone,
  HotlinePhoneNumber,
  HowToGetInfo,
  HowToGetTitle,
  HowToGetWrap,
  Info,
  PartnerLogo,
  StyledLink,
  Subtitle,
  Title,
  TitleWrap,
  Content,
  MainInfo,
  AdditionalInfo,
} from './UserPrizeDetails.styled';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';
import { HiOutlinePhone } from 'react-icons/hi';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import { IProps } from './UserPrizeDetails.types';

const UserPrizeDetails: FC<IProps> = ({
  createdAtDate,
  partnerLogo,
  partnerName,
  code,
  conditions,
  prizeName,
  hotLinePhone,
  promotionName,
  hotLineWorkHours,
}) => {
  return (
    <Container>
      <CabinetGoBackLink />
      <Content>
        <MainInfo>
          <TitleWrap>
            <Title>{prizeName}</Title>
            <PartnerLogo src={partnerLogo} alt='логотип' />
          </TitleWrap>
          <DetailsWrap>
            <DescriptionWrap>
              <Subtitle>Акція:</Subtitle>
              <StyledLink to={PagePaths.root}>
                <Info>{promotionName}</Info>
                <NavArrow />
              </StyledLink>
            </DescriptionWrap>
            <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
            <DescriptionWrap>
              <Subtitle>Партнер:</Subtitle>
              <Info>{partnerName}</Info>
            </DescriptionWrap>
            <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
            <DescriptionWrap>
              <Subtitle>Акційний код:</Subtitle>
              <StyledLink to={PagePaths.root}>
                <Info>{code}</Info>
                <NavArrow />
              </StyledLink>
            </DescriptionWrap>
            <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
            <DescriptionWrap>
              <Subtitle>Дата розіграшу:</Subtitle>
              <Info>{createdAtDate}</Info>
            </DescriptionWrap>
          </DetailsWrap>
        </MainInfo>
        <AdditionalInfo>
          <HowToGetWrap>
            <HowToGetTitle>Як отримати</HowToGetTitle>
            <HowToGetInfo>{conditions}</HowToGetInfo>
          </HowToGetWrap>
          <HotlineInfoWrap>
            <HotlineInfo>
              Якщо у вас виникли додаткові питання, можете звернутись в Центр
              Обслуговування Кліентів. Гаряча лінія працює {hotLineWorkHours}
            </HotlineInfo>
            {/* TODO fix */}
            <HotlinePhone href='tel:+'>
              <HiOutlinePhone size={theme.iconSizes.cabinetHotlinePhone} />
              <HotlinePhoneNumber>{hotLinePhone}</HotlinePhoneNumber>
            </HotlinePhone>
          </HotlineInfoWrap>
        </AdditionalInfo>
      </Content>
    </Container>
  );
};

export default UserPrizeDetails;
