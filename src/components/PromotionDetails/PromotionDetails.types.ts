import { Conditions } from '@/types/condition.types';
import { FAQs } from '@/types/faqs.types';
import { Prizes } from '@/types/prize.types';
import { Winners } from '@/types/winner.types';

export interface IProps {
  faqs: FAQs;
  prizes: Prizes;
  conditions: Conditions;
  winners: Winners;
}
