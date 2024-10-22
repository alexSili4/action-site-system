import { FC } from 'react';
import { IProps } from './PromotionWinnersTableByDateList.types';
import { List, ListItem } from './PromotionWinnersTableByDateList.styled';
import PromotionWinnersTableByDate from '@PromotionDetailsPageComponents/PromotionWinnersTableByDate';

const PromotionWinnersTableByDateList: FC<IProps> = ({ dates, winners }) => {
  return (
    <List>
      {dates.map((date, index) => (
        <ListItem key={index}>
          <PromotionWinnersTableByDate winners={winners} date={date} />
        </ListItem>
      ))}
    </List>
  );
};

export default PromotionWinnersTableByDateList;
