import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  LinkTitle,
  LinkTitleWrap,
  List,
  ListItem,
} from './PromotionsList.styled';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';
import { usePromotionCategory } from '@/hooks';
import LinkWithQuery from '@GeneralComponents/LinkWithQuery';
import { getPromotionDetailsPath } from '@/utils';

const PromotionsList: FC = () => {
  const promotions = usePromotionsStore(selectPromotions);
  const location = useLocation();
  const promotionCategory = usePromotionCategory();

  const linkState = {
    from: location,
    promotionCategory,
  };

  return (
    <Container>
      <List>
        {promotions.map(({ name, id }) => {
          const promotionDetailsPath = getPromotionDetailsPath(id);

          return (
            <ListItem key={id}>
              <LinkWithQuery to={promotionDetailsPath} state={linkState}>
                <LinkTitleWrap>
                  <LinkTitle>{name}</LinkTitle>
                </LinkTitleWrap>
              </LinkWithQuery>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PromotionsList;
