import { PageLocation, StringOrNull } from '@/types/types';

export interface IProps extends IStyledProps {
  from: PageLocation | undefined;
}

export interface IStyledProps {
  secondBannerDt: StringOrNull;
  secondBannerMob: StringOrNull;
}
