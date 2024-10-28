import { Conditions } from '@/types/condition.types';
import { FAQs } from '@/types/faqs.types';
import { Prizes } from '@/types/prize.types';
import { Shops } from '@/types/shop.types';
import { WinnersByDates } from '@/types/winner.types';

export interface IProps {
  faqs: FAQs;
  otherPrizes: Prizes;
  wheelPrizes: Prizes;
  conditions: Conditions;
  winners: WinnersByDates;
  shops: Shops;
}
