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
import { DateFormats } from '@/constants';

const UserCode: FC<IProps> = ({ code }) => {
  const {
    action_name: actionName,
    present_gift_name: presentGiftName,
    wheel_certificate_code: wheelCertificateCode,
    wheel_certificate_id: wheelCertificateId,
    present_gift_id: presentGiftId,
    action_id: actionId,
    code_created_at: codeCreatedAt,
    code_status: codeStatus,
    code: userCode,
    winner_id: winnerId,
  } = code;

  const shouldShowCertificateInfo = Boolean(wheelCertificateId);
  const shouldShowPrizeInfo = Boolean(presentGiftId);
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

  return (
    <UserStatisticsDetailsContainer>
      {/* TODO fix */}
      <UserReceiptDetails
        isVerifiedCode={false}
        formattedCode={formattedCode}
        // receiptNumber={receiptNumber}
        // shopNumber={shopNumber}
        // total={total}
        receiptNumber={'receiptNumber'}
        shopNumber={'shopNumber'}
        total={'total'}
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
      />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCode;
