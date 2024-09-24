import { FC, useState } from 'react';
import {
  Container,
  ShowLocationsBtn,
  ShowLocationsBtnTitle,
  LocationListContainer,
  Backdrop,
} from './LocationFilter.styled';
import { IProps } from './LocationFilter.types';
import { FaChevronDown } from 'react-icons/fa';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { theme } from '@/constants';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import LocationList from '@/components/LocationList';
import SearchField from '@/components/SearchField';

const LocationFilter: FC<IProps> = ({ isRootPage, isHidden = false }) => {
  const [showLocationList, setShowLocationList] = useState<boolean>(false);
  const [targetLocation, setTargetLocation] = useState<string | null>(null);
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

    toggleShowLocationList();
  };

  return (
    // TODO: відредагувати логіку появи тексту Міста на кнопці
    <>
      <Container isRootPage={isRootPage} isHidden={isHidden}>
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
            <SearchField />
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
      {showLocationList && <Backdrop onClick={toggleShowLocationList} />}
    </>
  );
};

export default LocationFilter;
