import { FC } from 'react';
import { IProps } from './PromotionContactsMapShop.types';
import {
  Address,
  Container,
  Name,
  TitleWrap,
  WorkHours,
  RadioBtn,
  Location,
} from './PromotionContactsMapShop.styled';

const PromotionContactsMapShop: FC<IProps> = ({
  onChange,
  checked,
  value,
  id,
  workHours,
  address,
  location,
  disabled,
}) => {
  return (
    <Container id={id} disabled={disabled}>
      <TitleWrap>
        <Name>АТБ-Маркет</Name>
        <Location>м. {location}</Location>
        <Address>{address}</Address>
        <WorkHours>Режим роботи: {workHours}</WorkHours>
      </TitleWrap>
      <RadioBtn
        type='radio'
        name='promotionShop'
        onChange={onChange}
        checked={checked}
        value={value}
        disabled={disabled}
      />
    </Container>
  );
};

export default PromotionContactsMapShop;
