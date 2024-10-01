import { FC, useEffect, useState } from 'react';
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
import { useCitiesStore } from '@/store/store';
import { selectGetCities } from '@/store/cities/selectors';

const LocationFilter: FC<IProps> = ({ isRootPage }) => {
  const getCities = useCitiesStore(selectGetCities);
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const city = searchParams.get(SearchParamsKeys.city);
  const [showLocationList, setShowLocationList] = useState<boolean>(false);
  const [targetLocation, setTargetLocation] = useState<string | null>(() =>
    city ? city : null
  );
  const showLocationsBtnTitle = targetLocation
    ? targetLocation
    : 'Оберіть місто';

  useEffect(() => {
    getCities();
  }, [getCities]);

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
            <LocationList setLocation={setLocation} />
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
