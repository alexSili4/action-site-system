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
  name,
  id,
}) => {
  return (
    <Container id={id}>
      <TitleWrap>
        <Name>{name}</Name>
        <Address>address</Address>
        <WorkSchedule>workSchedule</WorkSchedule>
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
