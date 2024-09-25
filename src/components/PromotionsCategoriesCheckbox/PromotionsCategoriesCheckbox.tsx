import { FC } from 'react';
import { IProps } from './PromotionsCategoriesCheckbox.types';
import { PromotionsCategoriesKeys } from '@/constants';
import {
  Checkbox,
  Container,
  Title,
} from './PromotionsCategoriesCheckbox.styled';

const PromotionsCategoriesCheckbox: FC<IProps> = ({
  title,
  value,
  checked,
  onChange,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Checkbox
        type='checkbox'
        name={PromotionsCategoriesKeys.name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </Container>
  );
};

export default PromotionsCategoriesCheckbox;
