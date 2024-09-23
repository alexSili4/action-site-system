import { FC, useState } from 'react';
import {
  Container,
  ShowLocationsBtn,
  ShowLocationsBtnTitle,
} from './LocationFilter.styled';
import { IProps } from './LocationFilter.types';
import { FaChevronDown } from 'react-icons/fa';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { theme } from '@/constants';

const LocationFilter: FC<IProps> = ({ isRootPage, isHidden = false }) => {
  const [showLocationList, setShowLocationList] = useState<boolean>(false);

  const toggleShowLocationList = () => {
    setShowLocationList((prevState) => !prevState);
  };

  const onShowListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowLocationList();
  };

  return (
    <Container isRootPage={isRootPage} isHidden={isHidden}>
      <ShowLocationsBtn
        type='button'
        onClick={onShowListBtnClick}
        isRootPage={isRootPage}
        showLocationList={showLocationList}
      >
        <ShowLocationsBtnTitle>Оберіть місто</ShowLocationsBtnTitle>
        <FaChevronDown size={theme.iconSizes.showLocationsBtn} />
      </ShowLocationsBtn>
      {showLocationList && <p>location list</p>}
    </Container>
  );
};

export default LocationFilter;
