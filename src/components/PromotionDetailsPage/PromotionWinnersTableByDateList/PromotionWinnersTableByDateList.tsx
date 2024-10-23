import { FC } from 'react';
import { IProps } from './PromotionWinnersTableByDateList.types';
import { List, ListItem } from './PromotionWinnersTableByDateList.styled';
import PromotionWinnersTableByDate from '@PromotionDetailsPageComponents/PromotionWinnersTableByDate';

const PromotionWinnersTableByDateList: FC<IProps> = ({ winners }) => {
  return (
    <List>
      {winners.map((data, index) => (
        <ListItem key={index}>
          <PromotionWinnersTableByDate winners={data} />
        </ListItem>
      ))}
    </List>
  );
};

export default PromotionWinnersTableByDateList;
