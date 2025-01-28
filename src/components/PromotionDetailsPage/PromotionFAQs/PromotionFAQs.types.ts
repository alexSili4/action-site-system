import { FAQs } from '@/types/faqs.types';
import { StringOrNull } from '@/types/types';

export interface IProps {
  faqs: FAQs;
  hotLineOtherText: StringOrNull;
  hotLinePhone: StringOrNull;
  hotLineWorkHours: StringOrNull;
  hotLineText: StringOrNull;
  validHotLinePhone: StringOrNull;
}
