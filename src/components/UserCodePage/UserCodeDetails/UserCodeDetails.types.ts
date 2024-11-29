import { StringOrNull } from '@/types/types';

export interface IProps {
  isErrorStatus: boolean;
  isSuccessStatus: boolean;
  promotionDetailsPath: string;
  actionName: string;
  codeCreatedAtDate: string;
  shouldShowCertificateInfo: boolean;
  certificateDetailsPath: string;
  wheelCertificateCode: StringOrNull;
  prizeDetailsPath: string;
  presentGiftName: StringOrNull;
  shouldShowPrizeInfo: boolean;
  shouldShowPrizesInfo: boolean;
}

export interface IStyledCodeDetailsSubtitleProps {
  isAutoWidth?: boolean;
}

export interface IStyledCodeDetailsItemProps {
  isHiddenOnDesk?: boolean;
  isHiddenOnMobile?: boolean;
}

export interface IStyledPrizesInfoTextProps {
  isHiddenOnDesk?: boolean;
}
