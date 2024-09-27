import { FC, useState } from 'react';
import {
  Container,
  ShowLocationsBtn,
  ShowLocationsBtnTitle,
  LocationListContainer,
} from './LocationFilter.styled';
import { IProps } from './LocationFilter.types';
import { FaChevronDown } from 'react-icons/fa';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { SearchParamsKeys, theme } from '@/constants';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import LocationList from '@/components/LocationList';
import LocationSearchField from '@/components/LocationSearchField';
import { useSetSearchParams } from '@/hooks';
import DropdownBackdrop from '@/components/DropdownBackdrop';

const LocationFilter: FC<IProps> = ({ isRootPage }) => {
  const [showLocationList, setShowLocationList] = useState<boolean>(false);
  const [targetLocation, setTargetLocation] = useState<string | null>(null);
  const { updateSearchParams } = useSetSearchParams();
  const showLocationsBtnTitle = targetLocation
    ? targetLocation
    : 'Оберіть місто';

  const toggleShowLocationList = () => {
    setShowLocationList((prevState) => !prevState);
  };

  const setLocation = (location: string) => {
    setTargetLocation(location);

    toggleShowLocationList();
  };

  const onShowListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    updateSearchParams({ key: SearchParamsKeys.search, value: '' });
    toggleShowLocationList();
  };

  return (
    // TODO: відредагувати логіку появи тексту Міста на кнопці
    // TODO: видалити список міст
    <>
      <Container isRootPage={isRootPage}>
        <ShowLocationsBtn
          type='button'
          onClick={onShowListBtnClick}
          isRootPage={isRootPage}
          showLocationList={showLocationList}
        >
          <ShowLocationsBtnTitle targetLocation={targetLocation}>
            {showLocationsBtnTitle}
          </ShowLocationsBtnTitle>
          <FaChevronDown size={theme.iconSizes.showLocationsBtn} />
        </ShowLocationsBtn>
        <SmoothFadeInDropdownList isVisible={showLocationList}>
          <LocationListContainer isRootPage={isRootPage}>
            <LocationSearchField />
            <LocationList
              setLocation={setLocation}
              locations={[
                'Київ',
                'Дніпро',
                'Львів',
                'Андрушівка',
                'Арциз',
                'Нікополь',
                'Енергодар',
                'Марганець',
                'Маріуполь',
                'Запоріжжя',
                'Суми',
                'Донецьк',
                'Луганськ',
                'Бахмут',
              ]}
            />
          </LocationListContainer>
        </SmoothFadeInDropdownList>
      </Container>
      {showLocationList && (
        <DropdownBackdrop onClick={toggleShowLocationList} />
      )}
    </>
  );
};

export default LocationFilter;
