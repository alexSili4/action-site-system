import { NumberOrNull } from '@/types/types';

export interface IProps {
  marks: NumberOrNull;
  promotionDetailsPath: string;
  actionName: string;
  codeCreatedAtDate: string;
  receiptNumber: number | undefined;
  drawDate: string;
  shopAddress: string;
  isValidShopAddress: boolean;
}

export interface IStyledCodeDetailsSubtitleProps {
  isAutoWidth?: boolean;
}

export interface IStyledCodeDetailsItemProps {
  isHiddenOnDesk?: boolean;
  isHiddenOnMobile?: boolean;
  maxWidth?: number;
}
