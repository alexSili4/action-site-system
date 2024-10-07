import { FC, useState } from 'react';
import { IProps } from './PromotionContactsMapHeader.types';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';
import { theme } from '@/constants';
import {
  ShopsListBtn,
  Container,
  Title,
} from './PromotionContactsMapHeader.styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import PromotionContactsMapHeaderShopsList from '@/components/PromotionContactsMapHeaderShopsList';

const PromotionContactsMapHeader: FC<IProps> = ({
  activeMarkerId,
  markers,
  setActiveMarker,
  isDesktop,
}) => {
  const [showShopsList, setShowShopsList] = useState<boolean>(false);

  const toggleShowShopsList = () => {
    setShowShopsList((prevState) => !prevState);
  };

  const onShopsListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowShopsList();
  };

  const shopsListBtnIcon = showShopsList ? (
    <CgClose size={theme.iconSizes.promotionContactsMapListClose} />
  ) : (
    <HiOutlineNewspaper size={theme.iconSizes.promotionContactsMapHeader} />
  );

  const updateActiveMarker = (id: number) => {
    setActiveMarker(id);

    if (!isDesktop) {
      toggleShowShopsList();
    }
  };

  // TODO fix shops list
  return (
    <Container>
      <ShopsListBtn type='button' onClick={onShopsListBtnClick}>
        <Title>Магазини в яких діє акція</Title>
        {shopsListBtnIcon}
      </ShopsListBtn>
      <SmoothFadeInDropdownList isVisible={showShopsList} zIndex={1000}>
        <PromotionContactsMapHeaderShopsList
          activeMarkerId={activeMarkerId}
          markers={markers}
          setActiveMarker={updateActiveMarker}
        />
      </SmoothFadeInDropdownList>
    </Container>
  );
};

export default PromotionContactsMapHeader;
