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

const PromotionConditions: FC<IProps> = ({ conditions }) => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsSliderContainer conditions={conditions} />
      <PromotionRegisterCodeLinkContainer>
        <PromotionRegisterCodeLink shouldShowTopSpacing={false} />
      </PromotionRegisterCodeLinkContainer>
    </Container>
  );
};

export default PromotionConditions;
