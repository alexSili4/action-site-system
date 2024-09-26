import { FC } from 'react';
import { IProps } from './PromotionsCategory.types';
import { RadioBtn, Container, Title } from './PromotionsCategory.styled';

const PromotionsCategory: FC<IProps> = ({
  title,
  value,
  checked,
  onChange,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <RadioBtn
        type='radio'
        name='category'
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </Container>
  );
};

export default PromotionsCategory;
