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
  getFileUrl,
} from '@/utils';
import { DateFormats, generalSettings } from '@/constants';

const UserCode: FC<IProps> = ({ code }) => {
  const {
    client_code: clientCode,
    atb_code: atbCode,
    shop,
    certificate,
    present,
    action,
    winner,
  } = code;

  const {
    status: codeStatus,
    created_at: codeCreatedAt,
    code: userCode,
  } = clientCode;
  const { receipt_sum: receiptSum, receipt_number: receiptNumber } =
    atbCode ?? {};
  const { shop_num: shopNum, city, street: shopStreet } = shop ?? {};
  const { name: cityName } = city ?? {};
  const { id: actionId, name: actionName } = action;
  const { id: winnerId = null } = winner ?? {};
  const { name: presentGiftName = null } = present ?? {};

  const shouldShowCertificateInfo = Boolean(certificate);
  const shouldShowPrizeInfo = Boolean(present);
  const shouldShowPrizesInfo = shouldShowCertificateInfo || shouldShowPrizeInfo;

  const { isErrorStatus, isSuccessStatus } = getCodeStatus(codeStatus);
  const promotionDetailsPath = getPromotionDetailsPath(actionId);
  const prizeDetailsPath = getPrizeDetailsPath(winnerId);
  const certificateDetailsPath = getCertificateDetailsPath(winnerId);
  const codeCreatedAtDate = formatDate({
    date: codeCreatedAt * 1000,
    dateFormat: DateFormats.winnersDate,
  });
  const formattedCode = getFormattedCode(userCode);

  // TODO fix
  // const certificateUrl = getFileUrl();
  const drawDate = '';
  const drawPrizeDate = '';
  const drawCertificateDate = '';
  const wheelCertificateCode = '';
  const certificateUrl = getFileUrl('');

  const shopAddress = `№${shopNum} ${cityName}, ${shopStreet}`;

  const userReceiptNumber = receiptNumber
    ? String(receiptNumber)
    : generalSettings.defaultReceiptText;
  const userShopNumber = shopNum
    ? `№${shopNum}`
    : generalSettings.defaultReceiptText;
  const userTotal = receiptSum
    ? receiptSum
    : generalSettings.defaultReceiptText;

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
        wheelCertificateCode={wheelCertificateCode}
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
        drawCertificateDate={drawCertificateDate}
        drawDate={drawDate}
        drawPrizeDate={drawPrizeDate}
        receiptNumber={receiptNumber}
        shopAddress={shopAddress}
        certificateUrl={certificateUrl}
      />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCode;
