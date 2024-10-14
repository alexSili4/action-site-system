import { FC } from 'react';
import { Container } from './PromotionDetailsSectionContainer.styled';
import { IProps } from './PromotionDetailsSectionContainer.types';

const PromotionDetailsSectionContainer: FC<IProps> = ({
  children,
  marginTopMobile = 0,
  marginTopDesk = 0,
  isConditionsSection = false,
  isPrizesSection = false,
}) => {
  return (
    <Container
      marginTopMobile={marginTopMobile}
      marginTopDesk={marginTopDesk}
      isConditionsSection={isConditionsSection}
      isPrizesSection={isPrizesSection}
    >
      {children}
    </Container>
  );
};

export default PromotionDetailsSectionContainer;
