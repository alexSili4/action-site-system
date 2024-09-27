import { FC, useState } from 'react';
import { uk } from 'date-fns/locale';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import {
  ShowDatePickerBtn,
  BtnLabel,
  DatePickerContainer,
} from './PromotionsDatePicker.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent, DatePickerEvent } from '@/types/types';
import { theme } from '@/constants';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import DropdownBackdrop from '@/components/DropdownBackdrop';

const PromotionsDatePicker: FC = () => {
  const [date, setDate] = useState<Date>(() => new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const onDatePickerChange = (e: DatePickerEvent) => {
    toggleShowDatePicker();

    e && setDate(e);
  };

  const toggleShowDatePicker = () => {
    setShowDatePicker((prevState) => !prevState);
  };

  const onShowDatePickerBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowDatePicker();
  };

  return (
    <>
      {showDatePicker && <DropdownBackdrop onClick={toggleShowDatePicker} />}
      <ShowDatePickerBtn
        onClick={onShowDatePickerBtnClick}
        showDatePicker={showDatePicker}
      >
        <IoCalendarClearOutline size={theme.iconSizes.datePickerBtnLabel} />
        <BtnLabel showDatePicker={showDatePicker}>Період дії</BtnLabel>
        <FaChevronDown size={theme.iconSizes.showDatePickerBtn} />
      </ShowDatePickerBtn>
      <SmoothFadeInDropdownList isVisible={showDatePicker}>
        <DatePickerContainer>
          <DatePicker
            selected={date}
            onChange={onDatePickerChange}
            locale={uk}
            inline
          />
        </DatePickerContainer>
      </SmoothFadeInDropdownList>
    </>
  );
};

export default PromotionsDatePicker;
