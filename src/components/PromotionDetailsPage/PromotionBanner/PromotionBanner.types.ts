import { PageLocation, StringOrNull } from '@/types/types';

export interface IProps extends IStyledProps {
  from: PageLocation | undefined;
  isFinishedPromotion: boolean;
}

export interface IStyledProps {
  bannerDt: StringOrNull;
  bannerMob: StringOrNull;
}
