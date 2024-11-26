import { FC } from 'react';
import { IProps } from './PromotionElementWrap.types';
import { Container } from './PromotionElementWrap.styled';

const PromotionElementWrap: FC<IProps> = ({
  children,
  isTable = false,
  paddingBottomMobile,
  paddingTopMobile,
  paddingTopDesk,
  paddingBottomDesk,
  paddingTopTablet,
  paddingBottomTablet,
}) => {
  return (
    <Container
      isTable={isTable}
      paddingTopMobile={paddingTopMobile}
      paddingBottomMobile={paddingBottomMobile}
      paddingTopDesk={paddingTopDesk}
      paddingBottomDesk={paddingBottomDesk}
      paddingBottomTablet={paddingBottomTablet}
      paddingTopTablet={paddingTopTablet}
    >
      {children}
    </Container>
  );
};

export default PromotionElementWrap;
