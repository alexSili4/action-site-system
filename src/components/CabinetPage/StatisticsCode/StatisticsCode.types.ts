export interface IProps {
  code: string;
  codeCreatedAt: string;
  partnerLogo: string;
  isSuccessStatus: boolean;
  isErrorStatus: boolean;
  shouldShowUserCertificateLink: boolean;
  shouldShowUserPrizeLink: boolean;
}

export interface IStyledCertificateWrapProps {
  partnerLogo: string;
}

export interface IStyledLinkProps {
  isCertificateLink?: boolean;
}
