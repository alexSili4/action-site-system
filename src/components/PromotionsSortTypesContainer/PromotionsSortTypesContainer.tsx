import { PromotionsSortTypesKeys, SearchParamsKeys, theme } from '@/constants';
import { FC, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {
  Container,
  ShowSortTypesBtn,
  BtnTitle,
} from './PromotionsSortTypesContainer.styled';
import PromotionsSortTypesList from '@/components/PromotionsSortTypesList';
import { useSetSearchParams } from '@/hooks';
import { getTranslatedPromotionsSortType, makeBlur } from '@/utils';
import { BtnClickEvent, InputChangeEvent } from '@/types/types';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import DropdownBackdrop from '@/components/DropdownBackdrop';

const PromotionsSortTypesContainer: FC = () => {
  const [showSortTypesList, setShowSortTypesList] = useState<boolean>(false);
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const sortType =
    searchParams.get(SearchParamsKeys.sort) ?? PromotionsSortTypesKeys.active;
  const sortTypes = Object.values(PromotionsSortTypesKeys);
  const btnTitle = getTranslatedPromotionsSortType(sortType);

  const toggleShowSortTypesList = () => {
    setShowSortTypesList((prevState) => !prevState);
  };

  const onShowSortTypesBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowSortTypesList();
  };

  const onSortTypeInputChange = (e: InputChangeEvent) => {
    const { value, name: key } = e.currentTarget;

    updateSearchParams({ key, value });
    toggleShowSortTypesList();
  };

  return (
    <>
      {showSortTypesList && (
        <DropdownBackdrop onClick={toggleShowSortTypesList} />
      )}
      <Container>
        <ShowSortTypesBtn
          type='button'
          onClick={onShowSortTypesBtnClick}
          showSortTypesList={showSortTypesList}
        >
          <BtnTitle showSortTypesList={showSortTypesList}>{btnTitle}</BtnTitle>
          <FaChevronDown size={theme.iconSizes.showSortTypesBtn} />
        </ShowSortTypesBtn>
        <SmoothFadeInDropdownList isVisible={showSortTypesList}>
          <PromotionsSortTypesList
            types={sortTypes}
            sortType={sortType}
            onChange={onSortTypeInputChange}
          />
        </SmoothFadeInDropdownList>
      </Container>
    </>
  );
};

export default PromotionsSortTypesContainer;
