import { FC } from 'react';
import { IProps } from './PromotionContactsMapShop.types';
import {
  Address,
  Container,
  Name,
  TitleWrap,
  WorkSchedule,
  RadioBtn,
  Location,
} from './PromotionContactsMapShop.styled';
import { generalSettings } from '@/constants';

const PromotionContactsMapShop: FC<IProps> = ({
  onChange,
  checked,
  value,
  id,
  workSchedule,
  address,
  location,
}) => {
  const targetWorkSchedule = workSchedule
    ? workSchedule
    : generalSettings.defaultDataText;
  return (
    <Container id={id}>
      <TitleWrap>
        <Name>АТБ-Маркет</Name>
        <Location>м. {location}</Location>
        <Address>{address}</Address>
        <WorkSchedule>Режим роботи: {targetWorkSchedule}</WorkSchedule>
      </TitleWrap>
      <RadioBtn
        type='radio'
        name='promotionShop'
        onChange={onChange}
        checked={checked}
        value={value}
      />
    </Container>
  );
};

export default PromotionContactsMapShop;
