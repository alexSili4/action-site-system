import { ActionType } from '@/types/promotion.types';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  code: string;
  codeCreatedAt: string;
  partnerLogo: string;
  isSuccessStatus: boolean;
  isErrorStatus: boolean;
  shouldShowUserCertificateLink: boolean;
  shouldShowUserPrizeLink: boolean;
  shouldShowCertificate: boolean;
  codeDetailsPath: string;
  certificateDetailsPath: string;
  prizeDetailsPath: string;
  shouldShowContent: boolean;
  shouldShowCodeLinks: boolean;
  marks: NumberOrNull;
  actionType: ActionType;
}

export interface IStyledCertificateWrapProps {
  partnerLogo: string;
}

export interface IStyledLinkProps {
  isCertificateLink?: boolean;
}

export interface IStyledLinksWrapProps {
  shouldShowCodeLinks: boolean;
}

export interface IStyledContentWrapProps {
  shouldShowContent: boolean;
}

export interface IStyledCertificateLinkProps {
  shouldShowCertificate: boolean;
}
