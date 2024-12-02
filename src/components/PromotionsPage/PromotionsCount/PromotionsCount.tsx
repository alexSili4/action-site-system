import { FC } from 'react';
import { Accent, Container, Text } from './PromotionsCount.styled';
import { IProps } from './PromotionsCount.types';

const PromotionsCount: FC<IProps> = ({ promotionsCount }) => {
  return (
    <Container>
      <Text>
        <Accent>{promotionsCount}</Accent> активних акції
      </Text>
    </Container>
  );
};

export default PromotionsCount;
