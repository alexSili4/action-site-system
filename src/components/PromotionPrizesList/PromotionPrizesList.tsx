import { FC } from 'react';
import { IProps } from './PromotionPrizesList.types';
import { List, ListItem } from './PromotionPrizesList.styled';
import PromotionPrizeImgSlider from '@/components/PromotionPrizeImgSlider';

const PromotionPrizesList: FC<IProps> = ({ prizes }) => {
  return (
    <List>
      {prizes.map((prize, index) => (
        <ListItem key={index}>
          <PromotionPrizeImgSlider prize={prize} />
        </ListItem>
      ))}
    </List>
  );
};

export default PromotionPrizesList;
