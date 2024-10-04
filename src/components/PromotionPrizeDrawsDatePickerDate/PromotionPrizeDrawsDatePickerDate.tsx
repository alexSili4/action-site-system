import { FC } from 'react';
import { IProps } from './PromotionPrizeDrawsDatePickerDate.types';
import {
  Container,
  Title,
  Input,
} from './PromotionPrizeDrawsDatePickerDate.styled';

const PromotionPrizeDrawsDatePickerDate: FC<IProps> = ({
  name,
  value,
  onChange,
  checked,
}) => {
  return (
    <Container>
      <Title>{value}</Title>
      <Input
        type='radio'
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </Container>
  );
};

export default PromotionPrizeDrawsDatePickerDate;
