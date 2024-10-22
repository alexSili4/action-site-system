import { FC } from 'react';
import {
  Container,
  ShowLocationsBtn,
  ShowLocationsBtnTitle,
  LocationListContainer,
} from './LocationFilter.styled';
import { IProps } from './LocationFilter.types';
import { FaChevronDown } from 'react-icons/fa';
import { theme } from '@/constants';
import SmoothFadeInDropdownList from '@AnimationBlocks/SmoothFadeInDropdownList';
import LocationSearchField from '@GeneralComponents/LocationSearchField';
import LocationList from '@GeneralComponents/LocationList';
import DropdownBackdrop from '@GeneralComponents/DropdownBackdrop';
import { useLocationFilter } from '@/hooks';

const LocationFilter: FC<IProps> = ({ isRootPage }) => {
  const {
    onShowListBtnClick,
    showLocationList,
    isSelectedCity,
    showLocationsBtnTitle,
    onLocationLinkClick,
    toggleShowLocationList,
  } = useLocationFilter();

  return (
    <>
      <Container isRootPage={isRootPage}>
        <ShowLocationsBtn
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
