import { FC } from 'react';
import Confetti from 'react-confetti';
import { Container } from './ConfettiAnimation.styled';

const ConfettiAnimation: FC = () => {
  const { innerHeight, innerWidth } = window;

  return (
    <Container>
      <Confetti width={innerWidth} height={innerHeight} />;
    </Container>
  );
};

export default ConfettiAnimation;
