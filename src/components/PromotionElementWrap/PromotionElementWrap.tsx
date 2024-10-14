import { FC } from 'react';
import { IProps } from './PromotionElementWrap.types';
import { Container } from './PromotionElementWrap.styled';

const PromotionElementWrap: FC<IProps> = ({
  children,
  isTable = false,
  paddingBottomMobile = 0,
  paddingTopMobile = 0,
  paddingTopDesk = 0,
  paddingBottomDesk = 0,
}) => {
  return (
    <Container
      isTable={isTable}
      paddingTopMobile={paddingTopMobile}
      paddingBottomMobile={paddingBottomMobile}
      paddingTopDesk={paddingTopDesk}
      paddingBottomDesk={paddingBottomDesk}
    >
      {children}
    </Container>
  );
};

export default PromotionElementWrap;
