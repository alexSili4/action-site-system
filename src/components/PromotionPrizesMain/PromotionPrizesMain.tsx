import { FC } from 'react';
import { PromotionDetailsPageSections } from '@/constants';
import {
  BannerTitle,
  BannerWrap,
  Container,
} from './PromotionPrizesMain.styled';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';

const PromotionPrizesMain: FC = () => {
  return (
    <Container id={PromotionDetailsPageSections.prizes}>
      <PromotionSectionTitle title='Призи головного розіграшу' />
      <BannerWrap>
        <BannerTitle>Унікальні призи від головного партнера акції</BannerTitle>
      </BannerWrap>
    </Container>
  );
};

export default PromotionPrizesMain;
