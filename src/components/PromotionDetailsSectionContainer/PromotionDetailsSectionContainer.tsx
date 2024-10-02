import { FC } from 'react';
import { Container } from './PromotionDetailsSectionContainer.styled';
import { IProps } from './PromotionDetailsSectionContainer.types';

const PromotionDetailsSectionContainer: FC<IProps> = ({
  children,
  isConditionsSection = false,
}) => {
  return (
    <Container isConditionsSection={isConditionsSection}>{children}</Container>
  );
};

export default PromotionDetailsSectionContainer;
