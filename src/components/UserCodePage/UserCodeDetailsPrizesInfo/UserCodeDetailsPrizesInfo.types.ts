import { StringOrNull } from '@/types/types';

export interface IProps {
  shouldShowCertificateInfo: boolean;
  certificateDetailsPath: string;
  wheelCertificateCode: StringOrNull;
  prizeDetailsPath: string;
  presentGiftName: StringOrNull;
  shouldShowPrizeInfo: boolean;
  isSuccessStatus: boolean;
  drawCertificateDate: string;
  drawPrizeDate: string;
}

export interface IStyledCertificateWrapProps {
  isSuccessStatus: boolean;
}

export interface IStyledPrizesInfoTextProps {
  isHiddenOnDesk?: boolean;
}
