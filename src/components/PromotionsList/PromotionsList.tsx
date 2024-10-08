import { FC } from 'react';
import { Card, Container, List, ListItem } from './PromotionsList.styled';
import LinkWithQuery from '@/components/LinkWithQuery';
import { useLocation } from 'react-router-dom';
import { IProps } from './PromotionsList.types';
import { IPromotionDetailsState } from '@/types/promotion.types';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';

const PromotionsList: FC<IProps> = ({ promotionCategory }) => {
  // TODO delete promotions
  const promotions: { id: number; date: string }[] = [
    { date: '08.08.24 - 25.09.24', id: 1 },
    { date: '08.08.24 - 25.09.24', id: 2 },
    { date: '08.08.24 - 25.09.24', id: 3 },
  ];
  const location = useLocation();

  const linkState: IPromotionDetailsState = {
    from: location,
    promotionCategory,
  };

  return (
    <Container>
      <List>
        {promotions.map(({ id, date }) => (
          <ListItem key={id}>
            <LinkWithQuery to={`${id}`} state={linkState}>
              <Card>
                <PromotionPeriodLabel period={date} />
              </Card>
            </LinkWithQuery>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PromotionsList;
