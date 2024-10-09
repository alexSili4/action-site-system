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
import { IProps } from './PromotionPrizes.types';

const PromotionPrizes: FC<IProps> = ({ prizes }) => {
  return (
    <Container id={PromotionDetailsPageSections.prizes}>
      <PromotionSectionTitle title='Призи' />
      <BannerWrap>
        <BannerTitle>Унікальні призи від головного партнера акції</BannerTitle>
      </BannerWrap>
      <List>
        <ListItem>
          <PromotionPrizesSlider prizes={prizes} />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider prizes={prizes} />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider prizes={prizes} />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider prizes={prizes} />
        </ListItem>
        <ListItem>
          <PromotionPrizesSlider prizes={prizes} />
        </ListItem>
      </List>
    </Container>
  );
};

export default PromotionPrizes;
