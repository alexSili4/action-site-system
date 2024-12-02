import { FC } from 'react';
import { ListItem } from './PromotionWinnersTableByDateListItem.styled';
// components
import PromotionWinnersTableByDate from '@PromotionDetailsPageComponents/PromotionWinnersTableByDate';
import { IProps } from './PromotionWinnersTableByDateListItem.types';

const PromotionWinnersTableByDateListItem: FC<IProps> = ({
  winners,
  isOpenSection,
}) => {
  return (
    <ListItem>
      <PromotionWinnersTableByDate
        winners={winners}
        isOpenSection={isOpenSection}
      />
    </ListItem>
  );
};

export default PromotionWinnersTableByDateListItem;
