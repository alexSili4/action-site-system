import { FC } from 'react';
import {
  Accent,
  AccentWrap,
  Container,
  Description,
  TextWrap,
  Title,
  FirstAccentShadow,
  SecondAccentShadow,
} from './AppInfo.styled';
// components
import LocationFilter from '@GeneralComponents/LocationFilter';

const AppInfo: FC = () => {
  return (
    <Container>
      <TextWrap>
        <Description>
          Приєднуйтесь і беріть участь у розіграші
          <AccentWrap>
            <Accent isFake>подарунків</Accent>
            <FirstAccentShadow>подарунків</FirstAccentShadow>
            <SecondAccentShadow>подарунків</SecondAccentShadow>
            <Accent>подарунків</Accent>
          </AccentWrap>
        </Description>
        <Title>
          Знайдіть активні акції мережі магазинів АТБ у вашому місті
        </Title>
      </TextWrap>
      <LocationFilter isRootPage makeScroll />
    </Container>
  );
};

export default AppInfo;
