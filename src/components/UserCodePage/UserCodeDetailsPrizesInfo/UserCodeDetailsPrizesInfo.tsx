import { FC } from 'react';
import { IProps } from './UserCodeDetailsPrizesInfo.types';
import {
  Certificate,
  CertificateDetailsLink,
  CertificateInfo,
  CertificateLink,
  CertificateWrap,
  PrizeLink,
  PrizeLinkTitle,
  PrizesInfo,
  PrizesInfoText,
  PrizesInfoTextWrap,
  PrizesInfoTitle,
  PrizeWrap,
} from './UserCodeDetailsPrizesInfo.styled';
import { useCabinetState } from '@/hooks';
import CouponIcon from '@/icons/cabinet/coupon.svg?react';
import { generalSettings } from '@/constants';
import { UserCodeInfoDelimiter } from '../UserCodeDetails/UserCodeDetails.styled';
import { Link } from 'react-router-dom';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';

const UserCodeDetailsPrizesInfo: FC<IProps> = ({
  shouldShowCertificateInfo,
  wheelCertificateCode,
  shouldShowPrizeInfo,
  prizeDetailsPath,
  presentGiftName,
  isSuccessStatus,
  drawCertificateDate,
  certificateDetailsPath,
  drawPrizeDate,
}) => {
  const cabinetState = useCabinetState();

  return (
    <PrizesInfo>
      {shouldShowCertificateInfo && (
        <>
          <CertificateWrap isSuccessStatus={isSuccessStatus}>
            {isSuccessStatus && (
              <CertificateDetailsLink to={certificateDetailsPath}>
                Сертифікат
              </CertificateDetailsLink>
            )}
            <CertificateInfo>
              <PrizesInfoTitle>Виграний сертифікат:</PrizesInfoTitle>
              {isSuccessStatus ? (
                <Certificate>
                  <PrizesInfoText>{drawCertificateDate}</PrizesInfoText>
                  <CertificateLink
                    to={certificateDetailsPath}
                    state={cabinetState}
                  >
                    <CouponIcon />
                    <PrizeLinkTitle>{wheelCertificateCode}</PrizeLinkTitle>
                  </CertificateLink>
                </Certificate>
              ) : (
                <PrizesInfoText>
                  {generalSettings.defaultDataText}
                </PrizesInfoText>
              )}
            </CertificateInfo>
          </CertificateWrap>
          <UserCodeInfoDelimiter></UserCodeInfoDelimiter>
        </>
      )}
      {shouldShowPrizeInfo && (
        <PrizeWrap>
          <PrizesInfoTitle>Виграний приз:</PrizesInfoTitle>
          <PrizesInfoText isHiddenOnDesk>
            {drawPrizeDate}{' '}
            <Link to={prizeDetailsPath} state={cabinetState}>
              <PrizeLinkTitle>{presentGiftName}</PrizeLinkTitle> <NavArrow />
            </Link>
          </PrizesInfoText>
          <PrizesInfoTextWrap>
            <PrizesInfoText>{drawPrizeDate}</PrizesInfoText>
            <PrizeLink to={prizeDetailsPath}>
              <PrizeLinkTitle>{presentGiftName}</PrizeLinkTitle>
              <NavArrow />
            </PrizeLink>
          </PrizesInfoTextWrap>
        </PrizeWrap>
      )}
    </PrizesInfo>
  );
};

export default UserCodeDetailsPrizesInfo;
