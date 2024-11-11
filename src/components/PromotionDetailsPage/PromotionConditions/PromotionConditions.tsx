import { FC } from 'react';
import PromotionConditionsSliderContainer from '@PromotionDetailsPageComponents/PromotionConditionsSliderContainer';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import {
  Container,
  PromotionRegisterCodeLinkContainer,
} from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionConditions.types';
import PromotionRegisterCodeLink from '@PromotionDetailsPageComponents/PromotionRegisterCodeLink';

const PromotionConditions: FC<IProps> = ({ conditions }) => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsSliderContainer conditions={conditions} />
      <PromotionRegisterCodeLinkContainer>
        <PromotionRegisterCodeLink margin={false} />
      </PromotionRegisterCodeLinkContainer>
    </Container>
  );
};

export default PromotionConditions;
