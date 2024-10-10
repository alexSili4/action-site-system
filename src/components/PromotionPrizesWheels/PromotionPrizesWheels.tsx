import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
  RegisterCodeLink,
} from './PromotionPrizesWheels.styled';
import PromotionPrizeImgSlider from '@/components/PromotionPrizeImgSlider';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { IProps } from './PromotionPrizesWheels.types';
import { PagePaths } from '@/constants';

const PromotionPrizes: FC<IProps> = ({ prizes }) => {
  return (
    <Container>
      <PromotionSectionTitle title='Призи «Колеса подарунків»' />
      <List>
        {prizes.map((prize) => (
          <ListItem>
            <PromotionPrizeImgSlider prize={prize} />
          </ListItem>
        ))}
      </List>
      <RegisterCodeLink to={PagePaths.code}>Зареєструвати код</RegisterCodeLink>
    </Container>
  );
};

export default PromotionPrizes;
