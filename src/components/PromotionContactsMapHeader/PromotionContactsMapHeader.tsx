import { FC, useState } from 'react';
import { IProps } from './PromotionContactsMapHeader.types';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';
import { theme } from '@/constants';
import {
  ShopsListBtn,
  Container,
  List,
  ListItem,
  ListWrap,
  Title,
} from './PromotionContactsMapHeader. styled';
import { makeBlur } from '@/utils';
import { BtnClickEvent, InputChangeEvent } from '@/types/types';
import PromotionContactsMapShop from '@/components/PromotionContactsMapShop';
import { useMediaQuery } from '@/hooks';

const PromotionContactsMapHeader: FC<IProps> = ({
  activeMarkerId,
  markers,
  setActiveMarker,
}) => {
  const [showShopsList, setShowShopsList] = useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);

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

  // TODO fix shops list
  return (
    <Container>
      <ShopsListBtn type='button' onClick={onShopsListBtnClick}>
        <Title>Магазини в яких діє акція</Title>
        {shopsListBtnIcon}
      </ShopsListBtn>
      {showShopsList && (
        <ListWrap>
          <List>
            {markers.map(({ id, popupText }) => {
              const checked = id === activeMarkerId;

              const onPromotionContactsMapShopChange = (
                e: InputChangeEvent
              ) => {
                makeBlur(e.currentTarget);

                setActiveMarker(Number(e.currentTarget.value));

                if (!isDesktop) {
                  toggleShowShopsList();
                }
              };

              return (
                <ListItem key={id}>
                  <PromotionContactsMapShop
                    checked={checked}
                    value={id}
                    name={popupText}
                    onChange={onPromotionContactsMapShopChange}
                    id={String(id)}
                  />
                </ListItem>
              );
            })}
          </List>
        </ListWrap>
      )}
    </Container>
  );
};

export default PromotionContactsMapHeader;
