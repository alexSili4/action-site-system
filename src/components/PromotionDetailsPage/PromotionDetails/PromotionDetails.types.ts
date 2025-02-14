import { BigPrizes } from '@/types/bigPrize.types';
import { Conditions } from '@/types/condition.types';
import { FAQs } from '@/types/faqs.types';
import { Prizes } from '@/types/prize.types';
import { IPromotion } from '@/types/promotion.types';
import { Shops } from '@/types/shop.types';
import { WinnersByDates } from '@/types/winner.types';

export interface IProps {
  promotion: IPromotion;
  faqs: FAQs;
  otherPrizes: Prizes;
  otherBigPrizes: BigPrizes;
  wheelPrizes: Prizes;
  wheelBigPrizes: BigPrizes;
  conditions: Conditions;
  winners: WinnersByDates;
  shops: Shops;
  isFinishedPromotion: boolean;
  isShowRegCodeLink: boolean;
}
