import { FC } from 'react';
import { IProps } from './RegisterCodeModalWinSelectPromotionsFilter.types';
import {
  Container,
  Title,
} from './RegisterCodeModalWinSelectPromotionsFilter.styled';

const RegisterCodeModalWinSelectPromotionsFilter: FC<IProps> = ({
  children,
}) => {
  return (
    <Container>
      <Title>Щоб продовжити</Title>
      {children}
    </Container>
  );
};

export default RegisterCodeModalWinSelectPromotionsFilter;
