import { FC } from 'react';
import { Container, RadioBtn, Title } from './StatisticsCategory.styled';
import { IProps } from './StatisticsCategory.types';

const StatisticsCategory: FC<IProps> = ({
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

export default StatisticsCategory;
