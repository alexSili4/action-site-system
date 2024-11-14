import { FC } from 'react';
import {
  Container,
  ShowLocationsBtn,
  ShowLocationsBtnTitle,
  LocationListContainer,
} from './LocationFilter.styled';
import { IProps } from './LocationFilter.types';
import { FaChevronDown } from 'react-icons/fa';
import { SectionsIds, theme } from '@/constants';
import SmoothFadeInDropdownList from '@AnimationBlocks/SmoothFadeInDropdownList';
import LocationSearchField from '@GeneralComponents/LocationSearchField';
import LocationList from '@GeneralComponents/LocationList';
import DropdownBackdrop from '@GeneralComponents/DropdownBackdrop';
import { useLocationFilter } from '@/hooks';

const LocationFilter: FC<IProps> = ({ isRootPage, makeScroll = false }) => {
  const {
    onShowListBtnClick,
    showLocationList,
    isSelectedCity,
    showLocationsBtnTitle,
    onLocationLinkClick,
    toggleShowLocationList,
  } = useLocationFilter(makeScroll);

  return (
    <>
      <Container isRootPage={isRootPage}>
        <ShowLocationsBtn
          id={SectionsIds.locationBtn}
          type='button'
          onClick={onShowListBtnClick}
          isRootPage={isRootPage}
          showLocationList={showLocationList}
        >
          <ShowLocationsBtnTitle isSelectedCity={isSelectedCity}>
            {showLocationsBtnTitle}
          </ShowLocationsBtnTitle>
          <FaChevronDown size={theme.iconSizes.showLocationsBtn} />
        </ShowLocationsBtn>
        <SmoothFadeInDropdownList isVisible={showLocationList}>
          <LocationListContainer isRootPage={isRootPage}>
            <LocationSearchField />
            <LocationList onLocationLinkClick={onLocationLinkClick} />
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
