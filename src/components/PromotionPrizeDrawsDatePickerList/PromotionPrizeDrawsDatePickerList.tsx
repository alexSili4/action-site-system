import { SearchParamsKeys } from '@/constants';
import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
  ListWrap,
} from './PromotionPrizeDrawsDatePickerList.styled';
import PromotionPrizeDrawsDatePickerDate from '@/components/PromotionPrizeDrawsDatePickerDate';
import { IProps } from './PromotionPrizeDrawsDatePickerList.types';

const PromotionPrizeDrawsDatePickerList: FC<IProps> = ({
  onDateInputChange,
  dates,
}) => {
  return (
    <Container>
      <ListWrap>
        <List>
          {dates.map(({ from, to }) => {
            const datePickerDateName = `${SearchParamsKeys.from} - ${SearchParamsKeys.to}`;
            const datePickerDateValue = `${from} - ${to}`;
            // TODO fix checked
            const checked = false;

            return (
              <ListItem key={from}>
                <PromotionPrizeDrawsDatePickerDate
                  value={datePickerDateValue}
                  name={datePickerDateName}
                  checked={checked}
                  onChange={onDateInputChange}
                />
              </ListItem>
            );
          })}
        </List>
      </ListWrap>
    </Container>
  );
};

export default PromotionPrizeDrawsDatePickerList;
