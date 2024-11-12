import { FC } from 'react';
import citrus from '@/citrus.svg';
import { PagePaths, theme } from '@/constants';
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
  DetailsDelimiter,
} from './UserCertificateDetails.styled';
import { HiOutlinePhone } from 'react-icons/hi';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';

const UserCertificateDetails: FC = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>Сертифікат на 5000грн в мережу магазинів Comfy</Title>
        <PartnerLogo src={citrus} alt='логотип' />
      </TitleWrap>
      <DetailsWrap>
        <DescriptionWrap>
          <Subtitle>Акція:</Subtitle>
          <StyledLink to={PagePaths.root}>
            <Info>Хапай вигідні пропозиції</Info>
            <NavArrow />
          </StyledLink>
        </DescriptionWrap>
        <DetailsDelimiter></DetailsDelimiter>
        <DescriptionWrap>
          <Subtitle>Сертифікат дійсний до:</Subtitle>
          <Info>28.12.2024</Info>
        </DescriptionWrap>
        <DetailsDelimiter></DetailsDelimiter>
        <DescriptionWrap>
          <Subtitle>Партнер:</Subtitle>
          <Info>Comfy</Info>
        </DescriptionWrap>
        <DetailsDelimiter></DetailsDelimiter>
        <DescriptionWrap>
          <Subtitle>Акційний код:</Subtitle>
          <StyledLink to={PagePaths.root}>
            <Info>ZU2L-MFSZ-YWE3</Info>
            <NavArrow />
          </StyledLink>
        </DescriptionWrap>
      </DetailsWrap>
      <ConditionsWrap>
        <ConditionsTitle>Умови використання</ConditionsTitle>
        <ConditionsInfo>
          Сертифікат діє у всіх магазинах мережі. Для активації знижки необхідно
          здійснити покупку на 500 грн або більше. Сертифікат не можна обміняти
          на готівку та не можна використовувати для товарів, на які є інші
          акції. Щоб скористатися сертифікатом, просто введіть його номер під
          час покупки.
        </ConditionsInfo>
      </ConditionsWrap>
      <HotlineInfoWrap>
        <HotlineInfo>
          Зверніться на Гарячу лінію за телефоном 0-800-500-415 (з понеділка по
          п’ятницю з 9:00 до 18:00). Дзвінки для абонентів усіх національних GSM
          операторів – відповідно до тарифних планів відповідних операторів.
        </HotlineInfo>
        {/* TODO fix */}
        <HotlinePhone href='tel:+'>
          <HiOutlinePhone size={theme.iconSizes.userCertificateHotlinePhone} />
          <HotlinePhoneNumber>0-800-500-415</HotlinePhoneNumber>
        </HotlinePhone>
      </HotlineInfoWrap>
    </Container>
  );
};

export default UserCertificateDetails;
