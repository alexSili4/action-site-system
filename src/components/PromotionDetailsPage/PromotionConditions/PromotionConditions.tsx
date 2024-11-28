import { FC } from 'react';
import {
  Container,
  PromotionRegisterCodeLinkContainer,
} from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionConditions.types';
// components
import PromotionConditionsSliderContainer from '@PromotionDetailsPageComponents/PromotionConditionsSliderContainer';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import PromotionRegisterCodeLink from '@PromotionDetailsPageComponents/PromotionRegisterCodeLink';

const PromotionConditions: FC<IProps> = ({ conditions, rulesPdf }) => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsSliderContainer
        conditions={conditions}
        rulesPdf={rulesPdf}
      />
      <PromotionRegisterCodeLinkContainer>
        <PromotionRegisterCodeLink shouldShowTopSpacing={false} />
      </PromotionRegisterCodeLinkContainer>
    </Container>
  );
};

export default PromotionConditions;
