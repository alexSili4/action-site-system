import { theme } from '@/constants';
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
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import { InputChangeEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';

const PromotionPrizeDrawsDatePicker: FC = () => {
  // TODO fix funtions to utils/hooks
  const [showDatesList, setShowDatesList] = useState<boolean>(false);

  const { updateSearchParams } = useSetSearchParams();

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
            <DatePickerBtnTitle>пофікси мене</DatePickerBtnTitle>
            <FaChevronDown size={theme.iconSizes.showLocationsBtn} />
          </DatePickerBtn>
          <SmoothFadeInDropdownList isVisible={showDatesList}>
            <PromotionPrizeDrawsDatePickerList
              onDateInputChange={onDateInputChange}
            />
          </SmoothFadeInDropdownList>
        </DatePickerWrap>
      </Container>
    </>
  );
};

export default PromotionPrizeDrawsDatePicker;
