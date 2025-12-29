import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './StatisticsCodesCategoryContent.styled';
import { useUserCodesStore } from '@/store/store';
import { selectUserCodes, selectTotalPages } from '@/store/userCodes/selectors';
import {
  formatDate,
  getCertificateDetailsPath,
  getCodeDetailsPath,
  getCodeStatus,
  getFileUrl,
  getPrizeDetailsPath,
} from '@/utils';
import { DateFormats, Messages } from '@/constants';
import receipts from '@/images/cabinet/receipts-min.png';
// components
import StatisticsCode from '@CabinetPageComponents/StatisticsCode';
import PaginationBar from '@GeneralComponents/PaginationBar';
import EmptyPrizesListMessage from '@CabinetPageComponents/EmptyPrizesListMessage';

const StatisticsCodesCategoryContent: FC = () => {
  const userCodes = useUserCodesStore(selectUserCodes);
  const totalPages = useUserCodesStore(selectTotalPages);
  const isManyPages = totalPages > 1;
  const isCodesLength = Boolean(userCodes.length);
  const shouldShowPaginationBar = isCodesLength && isManyPages;
  const isUserCodesList = Boolean(userCodes.length);

  return (
    <Container>
      {isUserCodesList ? (
        <>
          <List>
            {userCodes.map(
              ({
                code,
                code_created_at: codeCreatedAt,
                code_status: codeStatus,
                present_gift_partner_logo: presentGiftPartnerLogo,
                certificate_gift_partner_logo: certificateGiftPartnerLogo,
                wheel_certificate_id: wheelCertificateId,
                present_gift_id: presentGiftId,
                winner_id: winnerId,
                code_id: codeId,
                marks,
                action_type: actionType,
              }) => {
                const partnerLogoUrl = getFileUrl(
                  presentGiftPartnerLogo ?? certificateGiftPartnerLogo ?? ''
                );
                const { isErrorStatus, isSuccessStatus, isCanceledStatus } =
                  getCodeStatus(codeStatus);
                const codeCreatedAtDate = formatDate({
                  date: codeCreatedAt * 1000,
                  dateFormat: DateFormats.generalDate,
                });
                const shouldShowUserCertificateLink =
                  typeof wheelCertificateId === 'number' && isSuccessStatus;
                const shouldShowUserPrizeLink =
                  typeof presentGiftId === 'number' && isSuccessStatus;
                const shouldShowCertificate = codeStatus === 1;

                const prizeDetailsPath = getPrizeDetailsPath(winnerId);
                const certificateDetailsPath =
                  getCertificateDetailsPath(winnerId);
                const codeDetailsPath = getCodeDetailsPath(codeId);

                const shouldShowCodeLinks =
                  shouldShowUserPrizeLink || shouldShowUserCertificateLink;
                const shouldShowContent =
                  shouldShowCodeLinks || shouldShowCertificate;

                return (
                  <ListItem key={code}>
                    <StatisticsCode
                      code={code}
                      isCanceledStatus={isCanceledStatus}
                      codeCreatedAt={codeCreatedAtDate}
                      isErrorStatus={isErrorStatus}
                      isSuccessStatus={isSuccessStatus}
                      partnerLogo={partnerLogoUrl}
                      shouldShowUserCertificateLink={
                        shouldShowUserCertificateLink
                      }
                      shouldShowUserPrizeLink={shouldShowUserPrizeLink}
                      shouldShowCertificate={shouldShowCertificate}
                      certificateDetailsPath={certificateDetailsPath}
                      codeDetailsPath={codeDetailsPath}
                      prizeDetailsPath={prizeDetailsPath}
                      shouldShowCodeLinks={shouldShowCodeLinks}
                      shouldShowContent={shouldShowContent}
                      marks={marks}
                      actionType={actionType}
                    />
                  </ListItem>
                );
              }
            )}
          </List>
          {shouldShowPaginationBar && <PaginationBar totalPages={totalPages} />}
        </>
      ) : (
        <EmptyPrizesListMessage
          title={Messages.emptyUserCodesList}
          bgImg={receipts}
        />
      )}
    </Container>
  );
};

export default StatisticsCodesCategoryContent;
