import { FC } from 'react';
import { IProps } from './RegisterCodeModalWinSelectPromotionsLocationContent.types';
import {
  Container,
  Title,
} from './RegisterCodeModalWinSelectPromotionsLocationContent.styled';

const RegisterCodeModalWinSelectPromotionsLocationContent: FC<IProps> = ({
  children,
}) => {
  return (
    <Container>
      <Title>Щоб продовжити оберіть</Title>
      {children}
    </Container>
  );
};

export default RegisterCodeModalWinSelectPromotionsLocationContent;
