import { SearchParamsKeys } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './PromotionPrizeDrawsDatePickerList.styled';
import PromotionPrizeDrawsDatePickerDate from '@/components/PromotionPrizeDrawsDatePickerDate';

const PromotionPrizeDrawsDatePickerList: FC = () => {
  // TODO delete dates
  const dates: { from: string; to: string }[] = [
    { from: '09.08.24', to: '16.08.24' },
    { from: '10.08.24', to: '17.08.24' },
    { from: '11.08.24', to: '18.08.24' },
    { from: '12.08.24', to: '19.08.24' },
    { from: '13.08.24', to: '20.08.24' },
    { from: '14.08.24', to: '21.08.24' },
  ];

  const onDateInputChange = (e: InputChangeEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
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
    </Container>
  );
};

export default PromotionPrizeDrawsDatePickerList;
