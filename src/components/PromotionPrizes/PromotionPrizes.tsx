import { FC } from 'react';
import {
  BannerTitle,
  BannerWrap,
  Container,
  List,
  ListItem,
  Title,
} from './PromotionPrizes.styled';
import PromotionPrizesSlider from '@/components/PromotionPrizesSlider';

const PromotionPrizes: FC = () => {
  return (
    <Container>
      <Title>Призи</Title>
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
