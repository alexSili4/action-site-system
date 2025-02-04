import { FC, useState } from 'react';
import { IProps } from './PromotionContactsMapHeader.types';
import { HiOutlineNewspaper } from 'react-icons/hi2';
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
import { useIsDesktop } from '@/hooks';
import { CgClose } from 'react-icons/cg';
// components
import SmoothFadeInDropdownList from '@AnimationBlocks/SmoothFadeInDropdownList';
import PromotionContactsMapHeaderShopsListContainer from '@PromotionDetailsPageComponents/PromotionContactsMapHeaderShopsListContainer';

const PromotionContactsMapHeader: FC<IProps> = ({
  activeShopNum,
  setActiveShop,
  isNationalPromotion,
  shops,
}) => {
  const [showShopsList, setShowShopsList] = useState<boolean>(false);
  const isDesktop = useIsDesktop();
  const title = isNationalPromotion
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

    setActiveShop(Number(e.currentTarget.value));

    toggleShowShopsListOnMobile();
  };

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
          activeShopNum={activeShopNum}
          shops={shops}
          onInputChange={onPromotionContactsMapShopChange}
          isNationalPromotion={isNationalPromotion}
          onLinkClick={onAllShopsLinkClick}
        />
      </SmoothFadeInDropdownList>
    </Container>
  );
};

export default PromotionContactsMapHeader;
