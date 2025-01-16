import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './PromotionPrizesBanner.styled';
import { IProps } from './PromotionPrizesBanner.types';
import { getFileUrl } from '@/utils';

const PromotionPrizesBanner: FC<IProps> = ({ prizes,  logo }) => {
  return (
    <List>
      {prizes.map(({ gift: { images, banner } }, index) => {
        const { image = '' } = images[0] || {};
        const imageUrl = getFileUrl(banner ?? image);

        return (
          <ListItem key={index}>
            <Container imageUrl={imageUrl}>{logo}</Container>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionPrizesBanner;
