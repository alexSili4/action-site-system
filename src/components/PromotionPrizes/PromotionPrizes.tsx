import { FC } from 'react';
import {
  BannerTitle,
  BannerWrap,
  Container,
  List,
  ListItem,
} from './PromotionPrizes.styled';
import PromotionPrizesSlider from '@/components/PromotionPrizesSlider';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { PromotionDetailsPageSections } from '@/constants';

const PromotionPrizes: FC = () => {
  return (
    <Container id={PromotionDetailsPageSections.prizes}>
      <PromotionSectionTitle title='Призи' />
      <BannerWrap>
        <BannerTitle>Унікальні призи від головного партнера акції</BannerTitle>
      </BannerWrap>
      <List>
        <ListItem>
          <PromotionPrizesSlider />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider />
        </ListItem>
      </List>
    </Container>
  );
};

export default PromotionPrizes;
