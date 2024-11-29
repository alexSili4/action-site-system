import { PageLocation, StringOrNull } from '@/types/types';

export interface IProps extends IStyledProps {
  from: PageLocation | undefined;
  period: string;
  name: string;
  shouldShowPrizesWheel: boolean;
}

export interface IStyledProps {
  secondBannerDt: StringOrNull;
  secondBannerMob: StringOrNull;
}
