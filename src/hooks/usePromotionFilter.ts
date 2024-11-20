import { useState } from 'react';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import { IUsePromotionFilter } from '@/types/hooks.types';

const usePromotionFilter = (): IUsePromotionFilter => {
  const [showPromotionsList, setShowPromotionsList] = useState<boolean>(false);

  const toggleShowPromotionsList = () => {
    setShowPromotionsList((prevState) => !prevState);
  };

  const onShowListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowPromotionsList();
  };

  return {
    onShowListBtnClick,
    showPromotionsList,
    toggleShowPromotionsList,
  };
};

export default usePromotionFilter;
