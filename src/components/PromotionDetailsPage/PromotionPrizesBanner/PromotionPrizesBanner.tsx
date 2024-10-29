import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
  Title,
} from './PromotionPrizesBanner.styled';
import { IProps } from './PromotionPrizesBanner.types';
import { getFileUrl } from '@/utils';

const PromotionPrizesBanner: FC<IProps> = ({ prizes, description, logo }) => {
  return (
    <List>
      {prizes.map(({ gift: { images } }, index) => {
        const { image = '' } = images[0] || {};
        const imageUrl = getFileUrl(image);

        return (
          <ListItem key={index}>
            <Container imageUrl={imageUrl}>
              {logo}
              <Title>{description}</Title>
            </Container>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionPrizesBanner;
