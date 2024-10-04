import { SearchParamsKeys, theme } from '@/constants';
import { FC, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import DropdownBackdrop from '@/components/DropdownBackdrop';
import PromotionPrizeDrawsDatePickerList from '@/components/PromotionPrizeDrawsDatePickerList';
import {
  Container,
  DatePickerBtn,
  DatePickerBtnTitle,
  DatePickerWrap,
  Title,
} from './PromotionPrizeDrawsDatePicker.styled';
import { BtnClickEvent, PromotionPrizeDraws } from '@/types/types';
import { makeBlur } from '@/utils';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import { InputChangeEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';

const PromotionPrizeDrawsDatePicker: FC = () => {
  // TODO delete dates
  const dates: PromotionPrizeDraws = [
    { from: '09.08.24', to: '16.08.24' },
    { from: '10.08.24', to: '17.08.24' },
    { from: '11.08.24', to: '18.08.24' },
    { from: '12.08.24', to: '19.08.24' },
    { from: '13.08.24', to: '20.08.24' },
    { from: '14.08.24', to: '21.08.24' },
  ];
  // TODO fix funtions to utils/hooks
  const [showDatesList, setShowDatesList] = useState<boolean>(false);
  const { updateSearchParams, searchParams } = useSetSearchParams();
  // TODO fix funtions to utils
  const defaultDate = dates[0];
  const defaultDateFrom = defaultDate.from;
  const defaultDateTo = defaultDate.to;
  const fromSQ = searchParams.get(SearchParamsKeys.from);
  const toSQ = searchParams.get(SearchParamsKeys.from);
  const dateFrom = fromSQ ?? defaultDateFrom;
  const dateTo = toSQ ?? defaultDateTo;

  const datePickerBtnTitle = `${dateFrom} - ${dateTo}`;

  const toggleShowDatesList = () => {
    setShowDatesList((prevState) => !prevState);
  };

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
    toggleShowDatesList();
  };

  const onDatePickerBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowDatesList();
  };

  return (
    //   TODO fix title
    <>
      {showDatesList && <DropdownBackdrop onClick={toggleShowDatesList} />}
      <Container>
        <Title>Дата розіграшу</Title>
        <DatePickerWrap>
          <DatePickerBtn
            type='button'
            onClick={onDatePickerBtnClick}
            showDatesList={showDatesList}
          >
            <DatePickerBtnTitle>{datePickerBtnTitle}</DatePickerBtnTitle>
            <FaChevronDown size={theme.iconSizes.showLocationsBtn} />
          </DatePickerBtn>
          <SmoothFadeInDropdownList isVisible={showDatesList}>
            <PromotionPrizeDrawsDatePickerList
              dates={dates}
              onDateInputChange={onDateInputChange}
            />
          </SmoothFadeInDropdownList>
        </DatePickerWrap>
      </Container>
    </>
  );
};

export default PromotionPrizeDrawsDatePicker;
