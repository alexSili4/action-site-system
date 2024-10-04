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

const PromotionPrizeDrawsDatePicker: FC = () => {
  const [showDatesList, setShowDatesList] = useState<boolean>(false);

  const toggleShowDatesList = () => {
    setShowDatesList((prevState) => !prevState);
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
            <PromotionPrizeDrawsDatePickerList />
          </SmoothFadeInDropdownList>
        </DatePickerWrap>
      </Container>
    </>
  );
};

export default PromotionPrizeDrawsDatePicker;
