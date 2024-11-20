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

const LocationFilter: FC<IProps> = ({
  isRootPage = false,
  makeScroll = false,
  isModalWin = false,
}) => {
  const {
    onShowListBtnClick,
    showLocationList,
    isSelectedCity,
    showLocationsBtnTitle,
    onLocationLinkClick,
    toggleShowLocationList,
    showOtherModalWin,
    isBigSize,
  } = useLocationFilter({ makeScroll, isRootPage, isModalWin });

  return (
    <>
      <Container isRootPage={isRootPage} showOtherModalWin={showOtherModalWin}>
        <ShowLocationsBtn
          id={SectionsIds.locationBtn}
          type='button'
          onClick={onShowListBtnClick}
          isBigSize={isBigSize}
          showLocationList={showLocationList}
        >
          <ShowLocationsBtnTitle isSelectedCity={isSelectedCity}>
            {showLocationsBtnTitle}
          </ShowLocationsBtnTitle>
          <FaChevronDown size={theme.iconSizes.showLocationsBtn} />
        </ShowLocationsBtn>
        <SmoothFadeInDropdownList isVisible={showLocationList}>
          <LocationListContainer isBigSize={isBigSize}>
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
