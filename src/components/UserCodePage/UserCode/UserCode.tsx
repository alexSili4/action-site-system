import { FC } from 'react';
// components
import UserReceiptDetails from '@UserCodePageComponents/UserReceiptDetails';
import UserCodeDetails from '@UserCodePageComponents/UserCodeDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';
import { IProps } from './UserCode.types';
import {
  formatDate,
  getPromotionDetailsPath,
  getCodeStatus,
  getCertificateDetailsPath,
  getPrizeDetailsPath,
  getFormattedCode,
} from '@/utils';
import { DateFormats, generalSettings } from '@/constants';

const UserCode: FC<IProps> = ({ code }) => {
  const {
    client_code: clientCode,
    atb_code: atbCode,
    certificate,
    present,
    action,
    winner,
    dates,
  } = code;

  const {
    status: codeStatus,
    created_at: codeCreatedAt,
    code: userCode,
    marks,
  } = clientCode;
  const {
    receipt_sum: receiptSum,
    receipt_number: receiptNumber,
    shop,
  } = atbCode ?? {};
  const { shop_num: shopNum, city, street: shopStreet } = shop ?? {};
  const { name: cityName } = city ?? {};
  const { id: actionId, name: actionName, action_type: actionType } = action;
  const { id: winnerId = null, win_date: winDate = new Date() } = winner ?? {};
  const { name: presentGiftName = null } = present ?? {};
  const {
    sent_at: certificateSentAt,
    certificate_code: certificateCode = null,
  } = certificate ?? {};

  const { isErrorStatus, isSuccessStatus } = getCodeStatus(codeStatus);
  const promotionDetailsPath = getPromotionDetailsPath(actionId);
  const prizeDetailsPath = getPrizeDetailsPath(winnerId);
  const certificateDetailsPath = getCertificateDetailsPath(winnerId);
  const formattedCode = getFormattedCode(userCode);

  const shouldShowCertificateInfo = Boolean(certificate);
  const shouldShowPrizeInfo = Boolean(present);
  const shouldShowPrizesInfo = shouldShowCertificateInfo || shouldShowPrizeInfo;

  const codeCreatedAtDate = formatDate({
    date: codeCreatedAt * 1000,
    dateFormat: DateFormats.winnersDate,
  });
  const drawDate = dates[0]?.date_from;
  const formattedDrawDate = formatDate({
    date: drawDate,
    dateFormat: DateFormats.winnersDate,
  });
  const targetDrawDate = drawDate
    ? formattedDrawDate
    : generalSettings.defaultDataText;
  const formattedWinDate = formatDate({
    date: winDate,
    dateFormat: DateFormats.winnersDate,
  });
  const certificateSentAtDate = formatDate({
    date: certificateSentAt ? certificateSentAt * 1000 : null,
    dateFormat: DateFormats.winnersDate,
  });

  const isValidShopAddress =
    Boolean(shopNum) && Boolean(cityName) && Boolean(shopStreet);

  const shopAddress = `№${shopNum} ${cityName}, ${shopStreet}`;
  const targetShopAddress = isValidShopAddress
    ? shopAddress
    : generalSettings.defaultDataText;

  const userReceiptNumber = receiptNumber
    ? String(receiptNumber)
    : generalSettings.defaultDataText;
  const userShopNumber = shopNum
    ? `№${shopNum}`
    : generalSettings.defaultDataText;
  const userTotal = receiptSum ? receiptSum : generalSettings.defaultDataText;

  return (
    <UserStatisticsDetailsContainer>
      <UserReceiptDetails
        formattedCode={formattedCode}
        userReceiptNumber={userReceiptNumber}
        userShopNumber={userShopNumber}
        userTotal={userTotal}
      />
      <UserCodeDetails
        actionName={actionName}
        wheelCertificateCode={certificateCode}
        shouldShowCertificateInfo={shouldShowCertificateInfo}
        shouldShowPrizeInfo={shouldShowPrizeInfo}
        presentGiftName={presentGiftName}
        shouldShowPrizesInfo={shouldShowPrizesInfo}
        promotionDetailsPath={promotionDetailsPath}
        certificateDetailsPath={certificateDetailsPath}
        codeCreatedAtDate={codeCreatedAtDate}
        isErrorStatus={isErrorStatus}
        isSuccessStatus={isSuccessStatus}
        prizeDetailsPath={prizeDetailsPath}
        drawCertificateDate={certificateSentAtDate}
        drawDate={targetDrawDate}
        drawPrizeDate={formattedWinDate}
        receiptNumber={receiptNumber}
        shopAddress={targetShopAddress}
        marks={marks}
        actionType={actionType}
      />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCode;
