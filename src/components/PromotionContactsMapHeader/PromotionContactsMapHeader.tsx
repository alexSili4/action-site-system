import { FC, useState } from 'react';
import { IProps } from './PromotionContactsMapHeader.types';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';
import { Messages, theme } from '@/constants';
import {
  ShopsListBtn,
  Container,
  Title,
} from './PromotionContactsMapHeader.styled';
import { makeBlur } from '@/utils';
import {
  AnchorClickEvent,
  BtnClickEvent,
  InputChangeEvent,
} from '@/types/types';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import PromotionContactsMapHeaderShopsListContainer from '@/components/PromotionContactsMapHeaderShopsListContainer';

const PromotionContactsMapHeader: FC<IProps> = ({
  activeMarkerId,
  markers,
  setActiveMarker,
  isDesktop,
}) => {
  const [showShopsList, setShowShopsList] = useState<boolean>(false);
  // TODO delete isNationalPromotionTrue
  const isNationalPromotionTrue = true;
  // TODO delete isNationalPromotionTrue
  const title = isNationalPromotionTrue
    ? Messages.nationalPromotionMapTitle
    : Messages.otherPromotionMapTitle;

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

  const toggleShowShopsListOnMobile = () => {
    if (!isDesktop) {
      toggleShowShopsList();
    }
  };

  const onAllShopsLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowShopsListOnMobile();
  };

  const onPromotionContactsMapShopChange = (e: InputChangeEvent) => {
    makeBlur(e.currentTarget);

    setActiveMarker(Number(e.currentTarget.value));

    toggleShowShopsListOnMobile();
  };

  // TODO fix shops list
  return (
    <Container>
      <ShopsListBtn type='button' onClick={onShopsListBtnClick}>
        <Title>{title}</Title>
        {shopsListBtnIcon}
      </ShopsListBtn>
      <SmoothFadeInDropdownList
        isVisible={showShopsList}
        zIndex={theme.zIndex.promotionShopsList}
      >
        <PromotionContactsMapHeaderShopsListContainer
          activeMarkerId={activeMarkerId}
          markers={markers}
          onInputChange={onPromotionContactsMapShopChange}
          isNationalPromotion={isNationalPromotionTrue}
          onLinkClick={onAllShopsLinkClick}
        />
      </SmoothFadeInDropdownList>
    </Container>
  );
};

export default PromotionContactsMapHeader;
