import { FC } from 'react';
import { IProps } from './PromotionWinnersTableByDateList.types';
import { List, ListItem } from './PromotionWinnersTableByDateList.styled';
import { getClosestDateIndex } from '@/utils';
// components
import PromotionWinnersTableByDate from '@PromotionDetailsPageComponents/PromotionWinnersTableByDate';

const PromotionWinnersTableByDateList: FC<IProps> = ({ winners }) => {
  const closestDateIndex = getClosestDateIndex(winners);

  return (
    <List>
      {winners.map((data, index) => {
        const isOpenSection = index === closestDateIndex;

        return (
          <ListItem key={index}>
            <PromotionWinnersTableByDate
              winners={data}
              isOpenSection={isOpenSection}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionWinnersTableByDateList;
