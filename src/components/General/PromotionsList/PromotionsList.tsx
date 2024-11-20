import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkTitle, List, ListItem } from './PromotionsList.styled';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';
import { usePromotionCategory } from '@/hooks';
import LinkWithQuery from '@GeneralComponents/LinkWithQuery';

const PromotionsList: FC = () => {
  const promotions = usePromotionsStore(selectPromotions);
  const location = useLocation();
  const promotionCategory = usePromotionCategory();

  const linkState = {
    from: location,
    promotionCategory,
  };

  return (
    <List>
      {promotions.map(({ name, id }) => {
        return (
          <ListItem key={id}>
            <LinkWithQuery to={`${id}`} state={linkState}>
              <LinkTitle>{name}</LinkTitle>
            </LinkWithQuery>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionsList;
