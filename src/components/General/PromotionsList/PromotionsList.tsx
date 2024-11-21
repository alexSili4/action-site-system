import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { getPromotionDetailsPath } from '@/utils';
import { IProps } from './PromotionsList.types';

const PromotionsList: FC<IProps> = ({ onPromotionLinkClick }) => {
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
              <Link
                to={promotionDetailsPath}
                onClick={onPromotionLinkClick}
                state={linkState}
              >
                <LinkTitleWrap>
                  <LinkTitle>{name}</LinkTitle>
                </LinkTitleWrap>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PromotionsList;
