import finishedPromoLabelDesk from '@/images/promotion/finished-promo-label-desk-min.png';
import finishedPromoLabelMob from '@/images/promotion/finished-promo-label-mob-min.png';

const getFinishedPromoLabel = (isTablet: boolean): string => {
  const finishedPromoLabel = isTablet
    ? finishedPromoLabelDesk
    : finishedPromoLabelMob;

  return finishedPromoLabel;
};

export default getFinishedPromoLabel;
