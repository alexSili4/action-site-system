import { FC } from 'react';
import { Container, List, ListItem } from './PromotionsSortTypesList.styled';
import { IProps } from './PromotionsSortTypesList.types';
import PromotionsSortType from '@/components/PromotionsSortType';
import { getTranslatedPromotionsSortType } from '@/utils';

const PromotionsSortTypesList: FC<IProps> = ({ types, sortType, onChange }) => {
  return (
    <Container>
      <List>
        {types.map((type) => {
          const checked = type === sortType;
          const title = getTranslatedPromotionsSortType(type);

          return (
            <ListItem key={type}>
              <PromotionsSortType
                value={type}
                title={title}
                checked={checked}
                onChange={onChange}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PromotionsSortTypesList;
