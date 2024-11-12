import { FC } from 'react';
import partnerLogo from '@/citrus.svg';
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
} from './UserPrizeDetails.styled';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';
import { HiOutlinePhone } from 'react-icons/hi';

const UserPrizeDetails: FC = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>Кухонна машина TEFAL QB813D38</Title>
        <PartnerLogo src={partnerLogo} alt='логотип' />
      </TitleWrap>
      <DetailsWrap>
        <DescriptionWrap>
          <Subtitle>Акція:</Subtitle>
          <StyledLink to={PagePaths.root}>
            <Info>Хапай вигідні пропозиції</Info>
            <NavArrow />
          </StyledLink>
        </DescriptionWrap>
        <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
        <DescriptionWrap>
          <Subtitle>Партнер:</Subtitle>
          <Info>Comfy</Info>
        </DescriptionWrap>
        <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
        <DescriptionWrap>
          <Subtitle>Акційний код:</Subtitle>
          <StyledLink to={PagePaths.root}>
            <Info>ZU2L-MFSZ-YWE3</Info>
            <NavArrow />
          </StyledLink>
        </DescriptionWrap>
        <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
        <DescriptionWrap>
          <Subtitle>Дата розіграшу:</Subtitle>
          <Info>28.12.2024</Info>
        </DescriptionWrap>
      </DetailsWrap>
      <HowToGetWrap>
        <HowToGetTitle>Як отримати</HowToGetTitle>
        <HowToGetInfo>
          Сертифікат діє у всіх магазинах мережі. Для активації знижки необхідно
          здійснити покупку на 500 грн або більше. Сертифікат не можна обміняти
          на готівку та не можна використовувати для товарів, на які є інші
          акції. Щоб скористатися сертифікатом, просто введіть його номер під
          час покупки.
        </HowToGetInfo>
      </HowToGetWrap>
      <HotlineInfoWrap>
        <HotlineInfo>
          Якщо у вас виникли додаткові питання, можете звернутись в Центр
          Обслуговування Кліентів. Гаряча лінія працює з понеділка по п’ятницю
          8:00-22:00
        </HotlineInfo>
        {/* TODO fix */}
        <HotlinePhone href='tel:+'>
          <HiOutlinePhone size={theme.iconSizes.cabinetHotlinePhone} />
          <HotlinePhoneNumber>0-800-500-415</HotlinePhoneNumber>
        </HotlinePhone>
      </HotlineInfoWrap>
    </Container>
  );
};

export default UserPrizeDetails;
