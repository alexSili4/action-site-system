import { FC } from 'react';
import { IProps } from './PromotionContactsMapShop.types';
import {
  Address,
  Container,
  Name,
  TitleWrap,
  WorkSchedule,
  RadioBtn,
} from './PromotionContactsMapShop.styled';

const PromotionContactsMapShop: FC<IProps> = ({
  onChange,
  checked,
  value,
  id,
  workSchedule,
  address,
}) => {
  return (
    <Container id={id}>
      <TitleWrap>
        <Name>АТБ-Маркет</Name>
        <Address>{address}</Address>
        <WorkSchedule>Режим роботи: {workSchedule}</WorkSchedule>
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
