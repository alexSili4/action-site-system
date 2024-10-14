import { FC } from 'react';
import { IProps } from './PromotionElementWrap.types';
import { Container } from './PromotionElementWrap.styled';

const PromotionElementWrap: FC<IProps> = ({
  children,
  isTable = false,
  paddingBottom = 0,
  paddingTop = 0,
}) => {
  return (
    <Container
      isTable={isTable}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </Container>
  );
};

export default PromotionElementWrap;
