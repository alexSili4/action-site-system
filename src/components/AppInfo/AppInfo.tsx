import { FC } from 'react';
import LocationFilter from '@/components/LocationFilter';
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
      <LocationFilter isRootPage />
    </Container>
  );
};

export default AppInfo;
