import { FC } from 'react';
import { IProps } from './StatisticsSortType.types';
import {
  Container,
  RadioBtn,
  Title,
  TitleWrap,
} from './StatisticsSortType.styled';
import { SearchParamsKeys } from '@/constants';

const StatisticsSortType: FC<IProps> = ({
  value,
  title,
  onChange,
  checked,
}) => {
  return (
    <Container>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
      <RadioBtn
        type='radio'
        name={SearchParamsKeys.sort}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </Container>
  );
};

export default StatisticsSortType;
