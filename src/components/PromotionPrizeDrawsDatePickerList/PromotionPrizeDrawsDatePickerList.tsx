import { SearchParamsKeys } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
  ListWrap,
} from './PromotionPrizeDrawsDatePickerList.styled';
import PromotionPrizeDrawsDatePickerDate from '@/components/PromotionPrizeDrawsDatePickerDate';
import { useSetSearchParams } from '@/hooks';

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
  const { updateSearchParams } = useSetSearchParams();

  const setDateSearchQuery = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    const [dateFromValue, dateToValue] = value.split(' - ');
    const [dateFromKey, dateToKey] = key.split(' - ');

    updateSearchParams({ key: dateFromKey, value: dateFromValue });
    updateSearchParams({ key: dateToKey, value: dateToValue });
  };

  const onDateInputChange = (e: InputChangeEvent) => {
    const { value, name: key } = e.currentTarget;

    makeBlur(e.currentTarget);
    setDateSearchQuery({ key, value });
  };

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
