import { FC } from 'react';
import { IProps } from './PromotionsSortType.types';
import {
  Container,
  RadioBtn,
  Title,
  TitleWrap,
} from './PromotionsSortType.styled';
import { SearchParamsKeys } from '@/constants';

const PromotionsSortType: FC<IProps> = ({
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

export default PromotionsSortType;
