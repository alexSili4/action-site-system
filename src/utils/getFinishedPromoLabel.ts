import finishedPromoLabelDesk from '@/images/promotion/finished-promo-label-desk.png';
import finishedPromoLabelMob from '@/images/promotion/finished-promo-label-mob.png';

const getFinishedPromoLabel = (isTablet: boolean): string => {
  const finishedPromoLabel = isTablet
    ? finishedPromoLabelDesk
    : finishedPromoLabelMob;

  return finishedPromoLabel;
};

export default getFinishedPromoLabel;
