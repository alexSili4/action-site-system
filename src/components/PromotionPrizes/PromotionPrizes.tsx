import { FC } from 'react';
import {
  BannerTitle,
  BannerWrap,
  Container,
  List,
  ListItem,
  Title,
} from './PromotionPrizes.styled';

const PromotionPrizes: FC = () => {
  return (
    <Container>
      <Title>Призи</Title>
      <BannerWrap>
        <BannerTitle>Унікальні призи від головного партнера акції</BannerTitle>
      </BannerWrap>
      <List>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </List>
    </Container>
  );
};

export default PromotionPrizes;
