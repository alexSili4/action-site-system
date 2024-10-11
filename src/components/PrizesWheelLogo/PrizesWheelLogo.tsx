import { FC } from 'react';
import WheelIcon from '@/icons/prizes/wheel.svg?react';
import { Container, Text } from './PrizesWheelLogo.styled';

const PrizesWheelLogo: FC = () => {
  return (
    <Container>
      <WheelIcon />
      <Text>Колесо подарунків</Text>
    </Container>
  );
};

export default PrizesWheelLogo;
