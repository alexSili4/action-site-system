import { useState } from 'react';
import { makeBlur } from '@/utils';
import { AnchorClickEvent, BtnClickEvent, Func } from '@/types/types';
import { IUsePromotionFilter } from '@/types/hooks.types';

const usePromotionFilter = (
  toggleShowSelectPromotionModalWin: Func
): IUsePromotionFilter => {
  const [showPromotionsList, setShowPromotionsList] = useState<boolean>(false);

  const toggleShowPromotionsList = () => {
    setShowPromotionsList((prevState) => !prevState);
  };

  const onShowListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowPromotionsList();
  };

  const onPromotionLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowSelectPromotionModalWin();
  };

  return {
    onShowListBtnClick,
    showPromotionsList,
    toggleShowPromotionsList,
    onPromotionLinkClick,
  };
};

export default usePromotionFilter;
