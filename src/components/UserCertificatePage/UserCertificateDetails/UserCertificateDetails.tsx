import { FC } from 'react';
import citrus from '@/citrus.svg';
import { MdArrowOutward } from 'react-icons/md';
import { PagePaths, theme } from '@/constants';
import {
  ConditionsInfo,
  ConditionsTitle,
  ConditionsWrap,
  Container,
  DetailsWrap,
  ExpirationDateWrap,
  HotlineInfo,
  HotlineInfoWrap,
  HotlinePhone,
  HotlinePhoneNumber,
  Info,
  PartnerLogo,
  PartnerWrap,
  PromotionCodeWrap,
  PromotionWrap,
  StyledLink,
  Subtitle,
  Title,
  TitleWrap,
} from './UserCertificateDetails.styled';
import { HiOutlinePhone } from 'react-icons/hi';

const UserCertificateDetails: FC = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>Сертифікат на 5000грн в мережу магазинів Comfy</Title>
        <PartnerLogo src={citrus} alt='логотип' />
      </TitleWrap>
      <DetailsWrap>
        <PromotionWrap>
          <Subtitle>Акція:</Subtitle>
          <StyledLink to={PagePaths.root}>
            <Info>Хапай вигідні пропозиції</Info>
            <MdArrowOutward size={theme.iconSizes.userCertificateDetailsNav} />
          </StyledLink>
        </PromotionWrap>
        <ExpirationDateWrap>
          <Subtitle>Сертифікат дійсний до:</Subtitle>
          <Info>28.12.2024</Info>
        </ExpirationDateWrap>
        <PartnerWrap>
          <Subtitle>Партнер:</Subtitle>
          <Info>Comfy</Info>
        </PartnerWrap>
        <PromotionCodeWrap>
          <Subtitle>Акційний код:</Subtitle>
          <StyledLink to={PagePaths.root}>
            <Info>ZU2L-MFSZ-YWE3</Info>
            <MdArrowOutward size={theme.iconSizes.userCertificateDetailsNav} />
          </StyledLink>
        </PromotionCodeWrap>
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
        <HotlinePhone>
          <HiOutlinePhone size={theme.iconSizes.userCertificateHotlinePhone} />
          <HotlinePhoneNumber>HotlinePhone</HotlinePhoneNumber>
        </HotlinePhone>
      </HotlineInfoWrap>
    </Container>
  );
};

export default UserCertificateDetails;
